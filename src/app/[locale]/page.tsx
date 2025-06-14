"use client";
import { useTranslations } from 'next-intl';
export default function Home() {
  const t = useTranslations('Home');
  return (
    <div className="container">
      <h1>{t("title")}</h1>;<div># หน้า dashboard หรือหน้าแรกหลัง login</div>
    </div>
  );
}
