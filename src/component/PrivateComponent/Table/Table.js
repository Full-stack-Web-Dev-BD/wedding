import React, { useState } from 'react'
import './table.css'
import PageFooter from '../PageFooter/PageFooter'
import TowLineTitle from '../Title/TowLineTitle'
const Table = () => {
    return (
        <div>
            <div className="col-md-8 offset-md-2 mb-5 text-center">
                <TowLineTitle h1='' h2="Tables" p="" />
                <div className="tableHeader">
                    <div className="tableHeaderComponent">
                        <p><i className="fa fa-users"></i> <span>Setup</span></p>
                        <p><i className="fas fa-file-invoice"></i> <span>List</span></p>
                        <p><i className="fa fa-file-pdf"></i> <span>PDF</span></p>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="twoSit">
                    <div className="sit">
                        <div className="userIconHolder">
                            <i className="fa fa-image"></i>
                        </div>
                        <p>Alamin</p>
                    </div>
                    <div className="sit">
                        <div className="userIconHolder">
                            <i className="fa fa-image"></i>
                        </div>
                        <p>Alamin</p>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className="col-md-6">
                        <div className="roundedTable">
                            <div className="tableBg"></div>
                            <span>Lorem ipsum</span>
                            <div className="sitHolder sit1">
                                <div className="sit s1">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit2">
                                <div className="sit s2">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit3">
                                <div className="sit s3">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit4">
                                <div className="sit s4">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit5">
                                <div className="sit s5">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit6">
                                <div className="sit s6">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit7">
                                <div className="sit s7">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit8">
                                <div className="sit s8">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit9">
                                <div className="sit s9">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit10">
                                <div className="sit s10">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="roundedTable">
                            <div className="tableBg"></div>
                            <span>Lorem ipsum</span>
                            <div className="sitHolder sit1">
                                <div className="sit s1">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit2">
                                <div className="sit s2">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit3">
                                <div className="sit s3">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit4">
                                <div className="sit s4">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit5">
                                <div className="sit s5">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit6">
                                <div className="sit s6">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit7">
                                <div className="sit s7">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit8">
                                <div className="sit s8">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit9">
                                <div className="sit s9">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                            <div className="sitHolder sit10">
                                <div className="sit s10">
                                    <div className="userIconHolder">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <p>Alamin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p45"></div>
                <div style={{ display: 'flex' }}>
                    <div className="col-md-6">
                        <div className="squerTable">
                            <div className="sit sk1 tp">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit sk2 tp">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit sk3 tp">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit sk4 tp">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>





                            <div className="sit sk1 bt">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit sk2 bt">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit sk3 bt">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit sk4 bt">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit tr">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit tl">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="squerTable">
                            <div className="sit sk1 tp">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit sk2 tp">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit sk3 tp">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit sk4 tp">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>





                            <div className="sit sk1 bt">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit sk2 bt">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit sk3 bt">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit sk4 bt">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit tr">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                            <div className="sit tl">
                                <div className="userIconHolder">
                                    <i className="fa fa-image"></i>
                                </div>
                                <p>Alamin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter table="Add New Table" />
        </div>
    )
}

export default Table