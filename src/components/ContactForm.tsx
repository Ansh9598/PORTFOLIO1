import { FormEvent, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = { name: '', email: '', subject: '', message: '' };

function validate(values: FormState) {
  const errors: Partial<FormState> = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.subject.trim()) errors.subject = 'Please add a subject.';
  if (!values.message.trim()) {
    errors.message = 'Please write a message.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormState, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      // No backend is wired up yet — this simulates a successful send.
      setSubmitted(true);
      setValues(initialState);
      setTimeout(() => setSubmitted(false), 4000);
    }
  }

  const fieldClass =
    'w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-cyan-glow/50';

  return (
    <form onSubmit={handleSubmit} noValidate className="glass rounded-2xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs text-muted">
            Name
          </label>
          <input
            id="name"
            value={values.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={fieldClass}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs text-muted">
            Email
          </label>
          <input
            id="email"
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={fieldClass}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="subject" className="mb-1.5 block text-xs text-muted">
          Subject
        </label>
        <input
          id="subject"
          value={values.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          className={fieldClass}
          placeholder="What's this about?"
        />
        {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-xs text-muted">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={fieldClass}
          placeholder="Tell me a bit about the opportunity or project…"
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-lg bg-gradient-to-r from-cyan-glow to-violet-glow px-4 py-2.5 text-sm font-medium text-[#05070d] transition-transform hover:scale-[1.01] active:scale-[0.99]"
      >
        Send Message
      </button>

      {submitted && (
        <p className="mt-3 flex items-center gap-2 text-sm text-signal">
          <CheckCircle2 size={16} /> Message ready to send — thanks for reaching out!
        </p>
      )}
    </form>
  );
}
