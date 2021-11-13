import FileSaver from "file-saver";

const Download = async () => {
  FileSaver.saveAs(
    process.env.PUBLIC_URL + "/resources/RSOS.apk"
    /*"axieAPKtest.apk"*/
  );
};

export default Download;
