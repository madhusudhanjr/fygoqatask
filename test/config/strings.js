const data = {
    http_methods: {
        POST: "POST",
        GET: "GET",
        PUT: "PUT",
        DELETE: "DELETE"
    },
    payload_types: {
        VALID_PAYLOAD: "valid_payload",
        JUNK_PAYLOAD: "junk",
        NO_PAYLOAD: "empty",
        OUT_OF_BOUND_PAYLOAD: "out_of_bound",
        DUPLICATE_EMAIL: "duplicate_email",
        NO_EMAIL: "no_email",
        INVALID_EMAIL: "invalid_email",
        EMAIL_NOT_IN_DB: "email_not_in_db@solvnow.com",
        NO_FIRSTNAME: "no_firstname",
        NO_LASTNAME: "no_lastname",
        NO_PHONE: "no_phone",
        INVALID_PHONE: "invalid_phone",
        NO_SOURCE: "no_source",
        INVALID_SOURCE: "invalid_source",
        NO_RECAPTHA: "no_recapthca",
        INVALID_RECAPTHA: "invalid_recapthca",
        NO_COUNTRY: "no_country",
        INVALID_COUNTRY: "invalid_country",
        NO_BRAND: "no_brand",
        INVALID_BRAND: "invalid_brand",
        NO_QUESTION: "no_question"
    }
}

exports.config = data;