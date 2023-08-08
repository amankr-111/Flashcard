import * as Yup from "yup";

// This component is resposible for all of the validation in this application sor user interface.
const FlashCardSchema = Yup.object().shape({
  groupid: Yup.string(),
  groupname: Yup.string()
    .max(20, "Must be less than 25 characters")
    .required("Required"),
  groupdescription: Yup.string().max(300, "Must be less than 300 characters"),
  groupimg: Yup.mixed(),

  cards: Yup.array().of(
    Yup.object().shape({
      cardid: Yup.string(),
      cardname: Yup.string()
        .max(20, "Must be less than 20 characters")
        .required("Required"),
      carddescription: Yup.string()
        .max(300, "Must be less than 300 characters")
        .required("Required"),
    })
  ),
  createdOn: Yup.date().default(() => new Date()),
});

export default FlashCardSchema;
