import Upload from "../components/Upload.jsx"

const Settings = ({sourceMap, onChangeMapping, sourceFormat, onChangeFormat, sourceFiles, onChangeFiles, onProceed}) => {

    const options = [{name: 'CSV', value: '.csv'}]

    const handleOnChangeMap = (e) => {
        e.preventDefault()
        onChangeMapping(e.target.files)
    }

    const handleOnChangeFormat = (e) => {
        e.preventDefault()
        onChangeFormat(e.target.value)
    }

    const handleOnChangeSourceFiles = (e) => {
        e.preventDefault()
        onChangeFiles(e.target.files)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        onProceed(sourceMap[0], sourceFormat, sourceFiles)
    }

    const displayFileChooser = () => {
        // other formats may require other input sources (besides from files)
        if(sourceFormat === '.csv') {
            return (
                <div styleName='fileChooser'>
                    <div styleName='selectFiles'>Select File(s)</div>
                    <FileInput accept={sourceFormat} faIcon={'upload'} files={sourceFiles} multiple={true} onChange={handleOnChangeSourceFiles}/>
                </div>
            )
        } // else {other formats}
    }

    const displayProceed = () => {
        if(sourceFormat === '.csv' && sourceFiles && sourceMap) {
            return (
                <div styleName='submitSection'>
                    <Modal show='true'>
                        Sample Type, Material, and Elevation Unit are set as Core, Rock, and Meters respectively.
                    </Modal>sourceMap, onChangeMapping,
                    <input styleName='submitButton' type='submit' value='Proceed' onClick={handleOnSubmit}/>
                </div>
            )
        }
    }