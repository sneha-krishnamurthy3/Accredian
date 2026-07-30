"use client";

import React, { useState } from "react";
import { toast } from "sonner";

export interface EnquireValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  courseDomain: string;
  candidates: string;
  mode: string;
  location: string;
}

export interface EnquireErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  courseDomain?: string;
  candidates?: string;
  mode?: string;
  location?: string;
}

const initialValues: EnquireValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  courseDomain: "",
  candidates: "",
  mode: "",
  location: "",
};

export const useEnquireForm = (onSuccessCallback?: () => void) => {
  const [values, setValues] = useState<EnquireValues>(initialValues);
  const [errors, setErrors] = useState<EnquireErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof EnquireValues;
    setValues((prev) => ({ ...prev, [fieldName]: value }));

    // Clear error
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    }
  };

  const handleSelectChange = (name: keyof EnquireValues, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    // Clear error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: EnquireErrors = {};
    let isValid = true;

    if (!values.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    } else if (values.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    if (!values.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!values.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^[0-9\s\-()]{7,15}$/.test(values.phone.replace(/\+\d+\s?/, "").trim())) {
      tempErrors.phone = "Please enter a valid phone number (7-15 digits).";
      isValid = false;
    }

    if (!values.company.trim()) {
      tempErrors.company = "Company name is required.";
      isValid = false;
    }

    if (!values.courseDomain) {
      tempErrors.courseDomain = "Course domain is required.";
      isValid = false;
    }

    if (!values.candidates.trim()) {
      tempErrors.candidates = "Number of candidates is required.";
      isValid = false;
    } else {
      const num = parseInt(values.candidates.trim(), 10);
      if (isNaN(num)) {
        tempErrors.candidates = "Number of candidates must be a number.";
        isValid = false;
      } else if (num <= 0) {
        tempErrors.candidates = "Number of candidates must be greater than 0.";
        isValid = false;
      }
    }

    if (!values.mode) {
      tempErrors.mode = "Mode of delivery is required.";
      isValid = false;
    }

    if (!values.location.trim()) {
      tempErrors.location = "Location is required.";
      isValid = false;
    } else if (/^\d+$/.test(values.location.trim())) {
      tempErrors.location = "Location cannot be a number.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please correct the errors in the form.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Enquiry submitted successfully!");
        setValues(initialValues);
        setErrors({});
        if (onSuccessCallback) onSuccessCallback();
      } else {
        if (data.errors) {
          setErrors(data.errors);
        }
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Enquiry submit error:", err);
      toast.error("Failed to connect to server. Please check your network.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSelectChange,
    handleSubmit,
    setValues,
  };
};

export default useEnquireForm;
