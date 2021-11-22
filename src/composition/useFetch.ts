import { reactive, watch, Ref } from "vue";

interface IFetchState<T> {
  data: T | null;
  loaded: boolean;
  error: string | null;
}

export default function useFetch<FetchResponseType, ReturnValueType>(
  url: string,
  ref?: Ref<ReturnValueType | null>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cb?: (data: FetchResponseType) => any,
) {
  const state = reactive<IFetchState<ReturnValueType>>({
    data: null,
    loaded: false,
    error: null,
  });

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json().then(cb);
      state.data = data;
      state.loaded = true;
    } catch (error) {
      state.error = `Error while fetching: ${error}`;
      state.loaded = true;
    }
  };

  watch(state, (newValue) => {
    if (ref) {
      ref.value = newValue.data as ReturnValueType;
    }
  });

  fetchData();
  return state;
}
