import { useRef } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

export function ContactMe() {
  const form = useRef<HTMLFormElement>(null);

  const service_id = import.meta.env.VITE_EMAIL_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const user_id = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(service_id, template_id, form.current, user_id).then(
        () => {
          console.log('SUCCESS!');
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    }
  };

  const formSubmit = (e: FormEvent) => {
    sendEmail(e);
    toast(
      "📨 Email has been sent!, I'll get back to you as soon as possible!",
      {
        description: 'Response time is usually within 24 hours.',
      }
    );
  };

  return (
    <section className="transition-all duration-300 ease-in-out mt-20">
      <div className="flex items-center justify-center lg:mt-10">
        <h2 className="text-2xl font-bold lg:text-3xl">
          Want to get in touch?
        </h2>
      </div>
      <div className="mt-14 lg:mt-20">
        <form
          ref={form}
          onSubmit={formSubmit}
          className="m-auto flex w-2/3 flex-col gap-y-5 rounded-lg lg:w-1/2 lg:p-10"
        >
          <div className="flex flex-col items-center justify-between gap-x-10 gap-y-5 lg:flex-row">
            <div className="flex w-full flex-col gap-y-5 ">
              <label htmlFor="user_name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="p-3 text-foreground bg-transparent shadow-md dark:shadow-none dark:text-white dark:bg-stone-900 dark:border-red-primary/40 dark:border-2"
                required
              />
            </div>
            <div className="flex w-full flex-col gap-y-5">
              <label htmlFor="user_email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="p-3 text-foreground bg-transparent shadow-md dark:shadow-none dark:text-white dark:bg-stone-900 dark:border-red-primary/40 dark:border-2"
                required
              />
            </div>
          </div>
          <label htmlFor="user_subject">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="user_subject"
            name="user_subject"
            className="p-3 text-foreground bg-transparent shadow-md dark:shadow-none dark:text-white dark:bg-stone-900 dark:border-red-primary/40 dark:border-2"
            required
          />
          <label htmlFor="message">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="p-3 pb-20 text-foreground bg-transparent shadow-md dark:shadow-none dark:text-white dark:bg-stone-900 dark:border-red-primary/40 dark:border-2"
            required
          />
          <input
            type="submit"
            value="Send"
            className="m-auto mb-10 mt-10 w-fit bg-transparent shadow-md dark:shadow-none cursor-pointer rounded-lg dark:border-red-primary/40 dark:border-2 p-3 px-5 text-foreground hover:bg-black/5 transition-all duration-300 ease-in-out dark:hover:bg-white dark:hover:bg-opacity-20"
          />
        </form>
        <Toaster />
      </div>
    </section>
  );
}
