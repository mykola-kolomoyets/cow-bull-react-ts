import React, {FC} from "react";
import WarningContext, {IWarningContext} from "./waningContext";

interface IWarningStateProps {
	children: any
}

const WarningState = (props: IWarningStateProps) => {
	
	const sampleContext: IWarningContext = {
		type: 'warning',
		text: 'non 4-digit'
	}
	
	return (
		//^ soon will be refactored for complex Warning provider to show warnings
		<WarningContext.Provider value={{type: 'warning', text: "Non 4-digit"}}>
		{...props.children}
		</WarningContext.Provider>
	)
}

export default WarningState;