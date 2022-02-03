import React, {useState} from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
  const useUser = useState({})
  const useAuth = useState(false)
	
	return (
		<AppContext.Provider value={{useUser,useAuth}}>
			{props.children}
		</AppContext.Provider>
	);
}