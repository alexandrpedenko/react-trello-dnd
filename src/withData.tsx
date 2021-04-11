import React, {
  PropsWithChildren,
  ComponentType,
  useState,
  useEffect,
} from 'react';
import { AppState } from './AppStateContext';
import { load } from './utils/api';

export const withData = (
  WrappedComponent: ComponentType<PropsWithChildren<{ initialState: AppState }>>
) => {
  return ({ children }: PropsWithChildren<{}>) => {
    //const initialState: AppState = {lists: [], draggedItem: undefined}
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | undefined>();
    const [initialState, setInitialState] = useState<AppState>({
      lists: [],
      draggedItem: undefined,
    });

    // logic of HOC
    useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const data = await load();
          setInitialState(data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };

      fetchInitialState();
    }, []);

    if (isLoading) {
      return <div>Loading</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return (
      <WrappedComponent initialState={initialState}>
        {children}
      </WrappedComponent>
    );
  };
};
