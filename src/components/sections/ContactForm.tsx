"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ContactFormValues } from '@/types/contact';

interface ContactFormProps {
  type: 'contact' | 'quote';
}

export default function ContactForm({ type }: ContactFormProps) {
  const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email'),
    message: z.string().min(1, 'Message is required'),
    phone: z.string().min(7, 'Phone is required').optional(),
    company: z.string().optional(),
    vessel: z.string().optional(),
    service: z.string().optional(),
  });
  type SchemaType = z.infer<typeof contactSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SchemaType>({
    resolver: zodResolver(contactSchema),
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSubmit = async (data: SchemaType) => {
    setStatus('loading');
    try {
      const endpoint = type === 'quote' ? '/api/quote' : '/api/contact';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          phone: data.phone,
          company: data.company,
          vessel: data.vessel,
          service: data.service,
        }),
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        const json = await res.json();
        setErrorMessage(json.error || 'Submission failed');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred');
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded-lg p-6 space-y-4"
    >
      {type === 'quote' && (
        <>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Company Name
            </label>
            <input
              type="text"
              {...register('company')}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Vessel Name
            </label>
            <input
              type="text"
              {...register('vessel')}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Service Required
            </label>
            <input
              type="text"
              {...register('service')}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
        </>
      )}
      <div>
        <label className="block text-sm font-medium text-primary mb-1">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          {...register('name')}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        {errors.name && (
          <p className="text-red-600 text-xs mt-1">
            {errors.name.message as string}
          </p>
        )}
      </div>
      {type === 'quote' && (
        <div>
          <label className="block text-sm font-medium text-primary mb-1">
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('phone', { required: type === 'quote' })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
          {errors.phone && (
            <p className="text-red-600 text-xs mt-1">
              {errors.phone.message as string}
            </p>
          )}
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-primary mb-1">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          {...register('email')}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        {errors.email && (
          <p className="text-red-600 text-xs mt-1">
            {errors.email.message as string}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-primary mb-1">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          rows={5}
          {...register('message')}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        {errors.message && (
          <p className="text-red-600 text-xs mt-1">
            {errors.message.message as string}
          </p>
        )}
      </div>
      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-6 py-3 bg-accent text-white rounded-md font-semibold hover:bg-green transition-colors disabled:opacity-50"
        >
          {status === 'loading'
            ? 'Submitting...'
            : type === 'quote'
            ? 'Request Quote'
            : 'Send Message'}
        </button>
        {status === 'success' && (
          <p className="text-green-600 text-sm mt-2">Thank you! Your submission has been received.</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
        )}
      </div>
    </form>
  );
}