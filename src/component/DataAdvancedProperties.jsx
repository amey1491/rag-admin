import React from "react";
import "./DataAdvancedProperties.css";
import Collapsible from "react-collapsible";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import uploadFileICon from '../../public/uploadFileICon.svg';

const DataAdvancedProperties = () => {
  return (
    <div className="data-advanced-properties-wrapper">
      <Collapsible
        trigger="Advanced Properties"
        className="adv-prop-btn btn-border"
      >
        <Tabs>
          <TabList>
            <Tab>General</Tab>
            <Tab>Authentication</Tab>
            <Tab>TL/SSL</Tab>
            <Tab>Proxy/SSH</Tab>
          </TabList>
          <TabPanel>
            <h4 className="dbschemeName">Connection String Scheme</h4>
            <Tabs>
              <TabList className="innerTabList">
                <Tab className="innerTabName">mongodb</Tab>
                <Tab className="innerTabName">mongodb+srv</Tab>
              </TabList>
              <TabPanel>
                <div className="tabinnerPanel">
                  <form>
                    <div className="form-group">
                      <label>Host</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Host"
                      />
                    </div>
                  </form>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="border-btn mx-3">Cancel</button>
                  <button className="border-btn">Save</button>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Mongodb + srv Panel</h2>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <h4 className="dbschemeName">Authentication Method</h4>
            <Tabs>
              <TabList className="innerTabList">
                <Tab className="innerTabName">Username/Password</Tab>
                <Tab className="innerTabName">OIDC</Tab>
                <Tab className="innerTabName">X.509</Tab>
                <Tab className="innerTabName">Kerberos</Tab>
                <Tab className="innerTabName">LDAP</Tab>
                <Tab className="innerTabName">AWS IAM</Tab>
              </TabList>
              <TabPanel>
                <div className="tabinnerPanel">
                  <form>
                    <div className="form-group">
                      <label for="username">User Name</label>
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="Optional"
                      />
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Optional"
                      />
                    </div>
                    <div className="form-group">
                      <label for="authdb">Authentication Database</label>
                      <input
                        type="text"
                        id="authdb"
                        className="form-control"
                        placeholder="Optional"
                      />
                    </div>
                    <div className="form-group">
                      <label>Authentication Mechanism</label>
                      <button className="border-btn">Default</button>
                      <button className="border-btn mx-3">SCRAM-SHA-1</button>
                      <button className="border-btn">SCRAM-SHA-256</button>
                    </div>
                  </form>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="border-btn mx-3">Cancel</button>
                  <button className="border-btn">Save</button>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>OIDC</h2>
              </TabPanel>
              <TabPanel>
                <h2>X.509</h2>
              </TabPanel>
              <TabPanel>
                <h2>Kerberos</h2>
              </TabPanel>
              <TabPanel>
                <h2>LDAP</h2>
              </TabPanel>
              <TabPanel>
                <h2>AWS IAM</h2>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <h4 className="dbschemeName">SSL/TLS Connection</h4>
            <button className="innerTabName">Default</button>
            <button className="innerTabName">On</button>
            <button className="innerTabName">Off</button>
            <form className="mt-4">
              <div className="form-group d-flex justify-content-between">
                <label>
                  Certificate Authority (.pem)
                  <small className="fst-italic mx-2">Optional</small>
                </label>
                <input type="file" className="uploadfile-btn form-control" />
                <button class="uploadFilebtn">
                  <img
                    src={uploadFileICon}
                    alt="upload file"
                    className="mx-3"
                  />
                  Upload a file
                </button>
              </div>
              <div className="form-group d-flex justify-content-between">
                <label>
                  Client Certificate & Key (.pem)
                  <small className="fst-italic mx-2">Optional</small>
                </label>
                <input type="file" className="uploadfile-btn form-control" />
                <button class="uploadFilebtn">
                  <img
                    src={uploadFileICon}
                    alt="upload file"
                    className="mx-3"
                  />
                  Upload a file
                </button>
              </div>
              <div className="form-group">
                <label>Client Key Password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Optional"
                />
              </div>
            </form>
          </TabPanel>
          <TabPanel>
            <h4 className="dbschemeName">SSH Tunnel/Proxy Method</h4>
            <button className="innerTabName">None</button>
            <button className="innerTabName">SSH with password</button>
            <button className="innerTabName">SSH with Identity file</button>
            <button className="innerTabName">Socks5</button>
          </TabPanel>
        </Tabs>
      </Collapsible>
    </div>
  );
};

export default DataAdvancedProperties;
