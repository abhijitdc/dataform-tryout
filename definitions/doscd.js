const scd = require("dataform-scd");

const {
    updates,
    view
} = scd("users_scd", {
    // A unique identifier for rows in the table.
    uniqueKey: "name",
    // A field that stores a timestamp or date of when the row was last changed.
    timestamp: "created_dt",
    // A field that stores the hash value of the fields that we want to track changes in. If you do not want to use the hash comparison, you may omit this field or set it to null
    hash: "hash_value", // OPTIONAL
    // The source table to build slowly changing dimensions from.
    source: {
        schema: "dataform_tryout",
        name: "users",
    },
    tags: ["slowly-changing-dimensions"],
    // Any configuration parameters to apply to the incremental table that will be created.
    // incrementalConfig: {
    //   bigquery: {
    //     partitionBy: "created_dt",
    //   },
    // },
});
