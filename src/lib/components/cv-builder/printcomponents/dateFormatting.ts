export function yyyymmToDate(yyyymm: string): Date | null {
  const [year, month] = yyyymm.split("-").map(Number);
  if (!year || !month || month < 1 || month > 12) {
    return null;
  }
  return new Date(year, month - 1);
}

export function formatMMYYDateAbbreviated(
  date: Date,
  locale: Intl.LocalesArgument = "pt-BR",
): string {
  const dtf = Intl.DateTimeFormat(locale, { year: "numeric", month: "short" });

  let result = dtf.format(date);
  if (locale === "pt-BR") {
    result = result.replaceAll(". de ", " ");
  }

  return result;
}

export function yyyymmToShortLocale(
  yyyymm: string,
  locale: Intl.LocalesArgument = "pt-BR",
): string {
  const date = yyyymmToDate(yyyymm);
  if (date === null) {
    return "";
  }
  return formatMMYYDateAbbreviated(date, locale);
}

export function yyyymmIsFutureDate(yyyymm: string): boolean {
  const date = yyyymmToDate(yyyymm);
  if (date === null) {
    return false;
  }
  const now = new Date();
  return date > now;
}

export function yyyymmToEstimateTag(
  yyyymm: string,
  locale: Intl.LocalesArgument = "pt-BR",
): string {
  if (locale != "pt-BR" && locale != "en") {
    throw new Error(`Locale ${locale} is not supported.`);
  }
  return yyyymmIsFutureDate(yyyymm) ? " (est.)" : "";
}
