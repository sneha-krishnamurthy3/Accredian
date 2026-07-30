"use client";

import React, { useState } from "react";
import { toast } from "sonner";

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const useContactForm = (onSuccessCallback?: () => void) => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormValues;
    setValues((prev) => ({ ...prev, [fieldName]: value }));
    
    // Clear errors when user types
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
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
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!values.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(values.phone.trim())) {
      tempErrors.phone = "Please enter a valid phone number (7-15 digits).";
      isValid = false;
    }

    if (!values.message.trim()) {
      tempErrors.message = "Message is required.";
      isValid = false;
    } else if (values.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters.";
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Message sent successfully!");
        setValues({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
        if (onSuccessCallback) onSuccessCallback();
      } else {
        // Handle server side validation errors if returned
        if (data.errors) {
          setErrors(data.errors);
        }
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submit error:", err);
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
    handleSubmit,
  };
};

export default useContactForm;
