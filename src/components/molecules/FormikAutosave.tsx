import { Spinner } from '@chakra-ui/core';
import { useFormikContext } from 'formik';
import { useCallback } from 'react';

import { debounce, useDidMountEffect } from '../../utils';

export const FormikAutoSave = ({ debounceMs = 250 }) => {
  const { values, submitForm, isSubmitting } = useFormikContext();
  const debouncedSubmit = useCallback(debounce(submitForm, debounceMs), [debounceMs, submitForm]);
  useDidMountEffect(debouncedSubmit, [debouncedSubmit, values]);
  // return !!isSubmitting ? <Spinner /> : null;
  return null
};

export default FormikAutoSave;
