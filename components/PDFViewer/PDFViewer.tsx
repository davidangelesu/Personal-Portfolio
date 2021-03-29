import React, { FunctionComponent } from "react";

interface Props {
	pdfUrl: string;
}
const PDFViewer: FunctionComponent<Props> = ({ pdfUrl }) => {
	return (
		<iframe
			src={"https://docs.google.com/gview?url=" + pdfUrl + "&embedded=true"}
			style={{ width: "100%", height: "100%" }}
			frameBorder="0"
		>
			PDF Loading...
		</iframe>
	);
};

export default PDFViewer;
