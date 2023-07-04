import React from 'react'

const OtherHeader = ({ name }) => {
  return (
    <>
        <div class="normal-bg subheader" 
        //</>style="background-image: url('/website/img/service-banner.jpg');"
        >
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="subheader-content">
                        <h1 class="page-title text-white fw-600">Equator International</h1>
                        <ul class="custom-flex breadcrumb">
                            <li><a href="/">Home</a></li>
                            <li>Why Us? {name} </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OtherHeader