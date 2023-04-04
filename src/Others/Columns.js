import {
  faEnvelope,
  faPhone,
  faUser,
  faUserAlt,
  faGlobe,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import EditData from "../Components/EditData";
import DeleteData from "../Components/DeleteData";

export const COLUMNS = [
  {
    Header: () => (
      <span>
        <FontAwesomeIcon icon={faSignature} className="icon" />
        ID
      </span>
    ),
    accessor: "id",
  },
  {
    Header: () => (
      <span>
        <FontAwesomeIcon icon={faUserAlt} className="icon" />
        Name
      </span>
    ),
    accessor: "name",
  },
  {
    Header: () => (
      <span>
        <FontAwesomeIcon icon={faUser} className="icon" />
        User Name
      </span>
    ),
    accessor: "username",
  },
  {
    Header: () => (
      <span>
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        Email
      </span>
    ),
    accessor: "email",
  },
  {
    Header: () => (
      <span>
        <FontAwesomeIcon icon={faPhone} className="icon" />
        Phone
      </span>
    ),
    accessor: "phone",
  },
  {
    Header: () => (
      <span>
        <FontAwesomeIcon icon={faGlobe} className="icon" />
        Website
      </span>
    ),
    accessor: "website",
  },

  {
    Header: "Edit",
    Cell: EditData,
  },
  {
    Header: "Delete",
    Cell: DeleteData,
  },
];
