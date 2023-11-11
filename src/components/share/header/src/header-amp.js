module.exports = function buildHeaderAmp
(
)
    {
        const staticHeaderAmp = `
        <header>
            <ul>
                <li>
                    <u id='lxgoldLogo'>لوکس گلد</u>
                </li>
                <li>
                <details>
                    <summary>
                        منو
                    </summary>
                    <ol>
                        <li>
                            استرداد وجه
                        </li>
                        <li>
                            مدت زمان تحويل
                        </li>
                        <li>
                            روند مرجوعي كالا و نحوه فسخ خدمات
                        </li>
                        <li>
                            ساعت پاسخگويي
                        </li>
                        <li>
                            نحوه پرداخت وجه
                        </li>
                        <li>
                            شيوه حمل
                        </li>
                        <li>
                            نحوه پشتیبانی
                        </li>
                        <li>
                            خدمات پس از فروش
                        </li>
                        <li>
                            قوانين و مقررات مربوط به رعايت حريم شخصي
                        </li>
                        <li>
                            تماس با ما
                        </li>
                        <li>
                            قوانین و مقررات
                        </li>
                        <li>
                            درباره ما
                        </li>
                        <li>
                            نحوه ثبت شكايات مصرف‌كنندگان
                        </li>
                        <li>
                            لوگوی اینماد
                        </li>
                        <li>
                            لوگوی ساماندهی
                        </li>
                        <li>
                            کد شامد
                        </li>
                    </ol>
                </details>
               
                </li>
            </ul>
        </header>
        `
        return function headerAmp
        ()
            {
                return staticHeaderAmp;
            }
    }