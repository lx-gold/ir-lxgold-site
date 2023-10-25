module.exports = function buildModelProductLdJson
()
    {
        return async function modelProductLdJson
        (
            {
                model
            }
        )
            {
                if
                (
                    !model
                )
                    {
                        throw new Error('modelLdJson Must have model');
                    }

                const result = `
                    <script type="application/ld+json">
                        {
                            "@context": "http://schema.org/",
				            "@type": "Product",
                            "name": "${model.title}",
                            "sku": "${model.id}",
                            "mpn": "${model.id}",
                            "brand": {
                                "@type": "Brand",
                                "name": "لوکس گلد"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.4",
                                "reviewCount": "89"
                            },
                            "review": {
                                "@type": "Review",
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": "4.7",
                                    "bestRating": "5"
                                },
                                "author": {
                                    "@type": "Person",
                                    "name": "محسن محمدی"
                                }
                            },
                            "offers": {
                                "@type": "Offer",
                                "url": "https://lxgold.ir/models/${model.id}/",
                                "priceCurrency": "IRR",
                                "price": "${model.price}",
                                "priceValidUntil": "2024-11-05",
                                "itemCondition": "http://schema.org/UsedCondition",
                                "availability": "http://schema.org/InStock",
                                "seller": {
                                "@type": "Organization",
                                "name": "لوکس گلد"
                                }
                            }
                        }
                    </script>
                `;

                return result;
            }
    }