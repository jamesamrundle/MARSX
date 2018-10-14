import React, { Component } from 'react';
import CSSModules from 'react-css-modules'

import styles from './settings.css'
import FileInput from "./common/FileInput/fileInput"
import Dropdown from "./common/Dropdown/dropdown"
import Modal from "./common/Modal/modal"
import Panel from './common/Panel/panel'

//import { connect } from 'react-redux';

class Upload extends Component {


    constructor(props) {
        super(props)
        console.log("State:", this.state)
    }

    //Settings = ({sourceMap, onChangeMapping, sourceFormat, onChangeFormat, sourceFiles, onChangeFiles, onProceed}) => {

    options = [{name: 'CSV', value: '.csv'}]

    handleOnChangeMap = (e) => {
        e.preventDefault()
        this.onChangeMapping(e.target.files)
    }

    handleOnChangeFormat = (e) => {
        e.preventDefault()
        this.onChangeFormat(e.target.value)
    }

    handleOnChangeSourceFiles = (e) => {
        e.preventDefault()
        this.onChangeFiles(e.target.files)
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.onProceed(this.sourceMap[0], this.sourceFormat, this.sourceFiles)
    }

    displayFileChooser = () => {
        // other formats may require other input sources (besides from files)
        if (this.sourceFormat === '.csv') {
            return (
                <div styleName='fileChooser'>
                    <div styleName='selectFiles'>Select File(s)</div>
                    <FileInput accept={this.sourceFormat} faIcon={'upload'} files={this.sourceFiles} multiple={true}
                               onChange={this.handleOnChangeSourceFiles}/>
                </div>
            )
        } // else {other formats}
    }

    displayProceed = () => {
        if (this.sourceFormat === '.csv' && this.sourceFiles && this.sourceMap) {
            return (
                <div styleName='submitSection'>
                    <Modal show='true'>
                        Sample Type, Material, and Elevation Unit are set as Core, Rock, and Meters respectively.
                    </Modal>
                    <input styleName='submitButton' type='submit' value='Proceed' onClick={this.handleOnSubmit}/>
                </div>
            )
        }
    }


    render() {
        return (

            <div className='upload'>
                <Panel name='Mapping Setup'>
                    <form className='content'>
                        <div className='text'>Select your Mapping</div>
                        <FileInput accept={'.js'} faIcon={'cogs'} files={this.sourceMap} multiple={false}
                                   onChange={this.handleOnChangeMap}/>
                        <label className='text' id='formatSelect'>Choose your Format</label>
                        <div className='center'>
                            <Dropdown htmlfor='formatSelect' options={this.options} value={this.sourceFormat}
                                      onChange={this.handleOnChangeFormat}/>
                        </div>
                        {this.displayFileChooser()}
                        {this.displayProceed()}
                    </form>
                </Panel>
            </div>
        )
    }
}

export default CSSModules(Upload, styles)
