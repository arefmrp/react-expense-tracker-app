import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    lang: "EN",
                    title:"expense-tracker-app",
                    desc:"this app for write expense and income costs and save your money",
                    inputSection:"Add Expense And Income ...",
                    countsSection:"Counts And Results",
                    items:"items",
                    income:"income",
                    expense:"expense",
                    inputTitle:"title",
                    inputDesc:"Description",
                    submit:"submit"
                }
            },
            fa: {
                translation: {
                    lang: "FA",
                    title:"برنامه ثبت درامد و هزینه",
                    desc:"این برنامه برای یادداشت درامد و هزینه طراحی شده وبا آن میتوانید پول خود را مدیریت کنید",
                    inputSection:"افزودن درامد و هزینه ...",
                    countsSection:"عددها و نتایج",
                    items:"آیتم ها ",
                    income:"درآمد",
                    expense:"هزینه",
                    inputTitle:"عنوان",
                    inputDesc:"توضیحات",
                    submit:"ثبت"

                }
            }

        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });