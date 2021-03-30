import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent } from "react";
import styles from '../ContactForm/styles'

interface Props {
	search: string;
	setSearch: any;
}

export const SearchBar: FunctionComponent<Props> = ({ search, setSearch }) => {
	return (
		<div className="relative w-full">
			<input
				className={`${styles.inputForm} shadow-md w-full p-2 pl-10`} 
				key="search-bar"
				type="search"
				value={search}
				placeholder="Search"
				onChange={(e) => setSearch(e.target.value)}
			/>
            <FontAwesomeIcon icon={faSearch} color="#a9a9a9" width="24" height="24" className="absolute inset-y-0 left-0 h-full mx-2" />
		</div>
	);
};
