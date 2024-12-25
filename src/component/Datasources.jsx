import React from "react";
import "./Datasources.css";
import mongodbIcon from "../../public/mongodbIcon.svg";
import uploadfileIcon from "../../public/uploadFileIcon.svg";
import awsDyndbIcon from "../../public/awsDyndbIcon.svg";
import sqlserverIcon from "../../public/sqlserverIcon.svg";
import awsRedShiftIcon from "../../public/awsRedShiftIcon.svg";
import mariaDBIcon from "../../public/mariaDBIcon.svg";
import redisDBIcon from "../../public/redisDBIcon.svg";
import oracleDBIcon from "../../public/oracleDBIcon.svg";
import postgresqlDBIcon from "../../public/postgresqlDBIcon.svg";
import spannerDBIcon from "../../public/spannerDBIcon.svg";
import saphanaDBIcon from "../../public/saphanaDBIcon.svg";
import cassandraDBIcon from "../../public/cassandraDBIcon.svg";
import prestoDBIcon from "../../public/prestoDBIcon.svg";
import databricksDBIcon from "../../public/databricksDBIcon.svg";
import awsathenaDBIcon from "../../public/awsathenaDBIcon.svg";
import snowflakeDBIcon from "../../public/snowflakeDBIcon.svg";
import gitHubDBIcon from "../../public/gitHubDBIcon.svg";
import graphQlDBIcon from "../../public/graphQlDBIcon.svg";
import openAiIcon from "../../public/openAiIcon.svg";
import exelIcon from "../../public/exelIcon.svg";
import httpapiIcon from "../../public/httpapiIcon.svg";
import salesforceIcon from "../../public/salesforceIcon.svg";
import stripeIcon from "../../public/stripeIcon.svg";
import sendgridIcon from "../../public/sendgridIcon.svg";
import airtableIcon from "../../public/airtableIcon.svg";
import awsapiIcon from "../../public/awsapiIcon.svg";
import awslambdaIcon from "../../public/awslambdaIcon.svg";
import slackIcon from "../../public/slackIcon.svg";
import searchIcon from "../../public/searchIcon.svg";

const Datasources = () => {
  return (
    <div className="connectors-wrapper">
      <div className="form-group">
        <div className="data-search">
          <form>
            <div className="form-group mx-0">
              <button className="data-search-btn">
                <img src={searchIcon} alt="addNew icon" className="img-fluid" />
              </button>
              <input type="search" className="form-control" />
            </div>
          </form>
        </div>
      </div>
      <button className="uploadfile-btn">
        <span>
          <img
            src={uploadfileIcon}
            alt="addNew icon"
            className="img-fluid addNewIcon"
          />
        </span>
        Upload File
      </button>
      <div className="connectors-inner-wrapper">
        <p className="fw-semibold">Connectors:</p>
        <div className="row mb-2">
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={mongodbIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              MongoDB
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={awsDyndbIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              AWS DynamoDB
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={awsRedShiftIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              AWS Redshift
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={sqlserverIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              SQL Server
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={mariaDBIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              MariaDB
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={redisDBIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              Redis
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={oracleDBIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              Oracle
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={postgresqlDBIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              PostgreSQL
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={spannerDBIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              Spanner
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={saphanaDBIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              SAP Hana
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={cassandraDBIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              Cassandra
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={prestoDBIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              Presto
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={databricksDBIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              Databricks
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={awsathenaDBIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              AWS Athena
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={snowflakeDBIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              Snowflake
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={snowflakeDBIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              Snowflake
            </button>
          </div>
        </div>
        <p className="fw-semibold">Third-party services and APIs:</p>
        <div className="row">
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={gitHubDBIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              GitHub
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={graphQlDBIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              GraphQL
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={openAiIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              OpenAI
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={exelIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              Excel
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={httpapiIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              HTTP API
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={salesforceIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              Salesforce
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={stripeIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              Stripe
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={sendgridIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              SendGrid
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={airtableIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              Airtable
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={awsapiIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              AWS API
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={awslambdaIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              AWS Lambda
            </button>
          </div>
          <div className="col-sm-3">
            <button className="uploadfile-btn btn-connectors">
              <span>
                <img
                  src={slackIcon}
                  alt="addNew icon"
                  className="img-fluid addNewIcon"
                />
              </span>
              Slack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datasources;
