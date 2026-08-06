import { emailBrand } from "../brand";
import {
  emailContactBlock,
  emailDocument,
  emailHeroSection,
  emailHighlightBox,
  emailInfoTable,
  emailParagraph,
} from "../components";
import { firstName, withDefaults, type MeetingEmailVars } from "../types";

export function appointmentConfirmationEmail(vars: MeetingEmailVars = {}) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);
  const join = v.meeting_link || v.cta_link;

  const html = emailDocument({
    preheader: `${v.meeting_title || "Your meeting"} is confirmed for ${v.meeting_date || v.date}${v.meeting_time ? ` at ${v.meeting_time}` : ""}.`,
    title: "Appointment confirmed",
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "Confirmed",
        badgeTone: "success",
        headline: "You’re on the calendar.",
        description: `Hi ${name}, your ${v.meeting_title || "scoping call"} with ${emailBrand.name} is confirmed.`,
        primaryCta: { href: join, label: "Add to calendar / Join" },
        secondaryCta: {
          href: `mailto:${emailBrand.email}`,
          label: "Reschedule",
        },
      }),
      emailInfoTable([
        ["Meeting", v.meeting_title || "Scoping call"],
        ["Date", v.meeting_date || v.date],
        ["Time", v.meeting_time || "—"],
        ["Location", v.location || "Video call"],
        ["Link", join],
      ]),
      emailHighlightBox({
        title: "Come prepared",
        body: "Have drawings, bid date, and trade scope handy. We’ll confirm deliverables and turnaround on the call.",
        tone: "primary",
      }),
      emailContactBlock(),
    ].join("\n"),
  });

  return {
    subject: `Confirmed: ${v.meeting_title || "Scoping call"} — ${v.meeting_date || v.date}`,
    html,
    text: `Hi ${name},\n\nMeeting confirmed: ${v.meeting_title}\n${v.meeting_date} ${v.meeting_time}\nJoin: ${join}`,
  };
}

export function meetingReminderEmail(vars: MeetingEmailVars = {}) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);
  const join = v.meeting_link || v.cta_link;

  const html = emailDocument({
    preheader: `Reminder: ${v.meeting_title || "your meeting"} ${v.meeting_time ? `at ${v.meeting_time}` : "is coming up"}.`,
    title: "Meeting reminder",
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "Reminder",
        badgeTone: "accent",
        headline: "See you soon.",
        description: `Hi ${name}, this is a friendly reminder about your upcoming ${v.meeting_title || "meeting"} with ${emailBrand.name}.`,
        primaryCta: { href: join, label: "Join meeting" },
      }),
      emailInfoTable([
        ["Meeting", v.meeting_title || "Scoping call"],
        ["Date", v.meeting_date || v.date],
        ["Time", v.meeting_time || "—"],
        ["Location", v.location || "Video call"],
      ]),
      emailParagraph("Need to move it? Reply and we’ll find another slot.", {
        muted: true,
      }),
      emailContactBlock(),
    ].join("\n"),
  });

  return {
    subject: `Reminder: ${v.meeting_title || "Meeting"} — ${v.meeting_date || v.date}`,
    html,
    text: `Hi ${name},\n\nReminder: ${v.meeting_title}\n${v.meeting_date} ${v.meeting_time}\nJoin: ${join}`,
  };
}
