import React from "react";
import FileSaver from "file-saver";

const Download = async () => {
  FileSaver.saveAs(
    process.env.PUBLIC_URL + "/resources/axieAPKtest.apk"
    /*"axieAPKtest.apk"*/
  );
};

export default Download;
