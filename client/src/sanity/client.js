import sanityClient from "@sanity/client";

const config = {
    projectId: "gn96p5c9",
    dataset: "production",
    apiVersion: "2021-10-21",
    token: "sknhIzdRmhIEclWP3sF4Lwvtvd3s2USyK7E2wu0ykWwO6BRNCfvwy0lIM1TWbXezAyEZvIv9m6uIbY88nOOssGv3taiMmdYjvnP18EwlOorhnELI4tRAeIVXtiz9XFNEiXBNhdEVMgT4MLg1A4tQdFnHZiA2nXbTaJYnKszTacf4kaRKHQe9",
    useCdn: true,
    ignoreBrowserTokenWarning: true
}

const client = sanityClient(config);

export default client;