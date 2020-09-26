import * as yup from "yup";
import { setLocale } from 'yup';

setLocale({
    mixed: {
        notType: '${path} is required',
    }
})
export const file = yup.object().shape({
    file: yup.mixed().required().test("is-file", val => !val || val.name !== undefined),
})