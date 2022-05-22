import { CELL_TYPE } from "../../components/commons/custom-inputs/custom-inputs.helper";
import { AVAILABLE_MODULES, CUSTOM_CELLS_TYPES } from "../enum";
import { CONTACT_FORM_TYPE } from "../constants";
import { PRICING_LICENSING } from "./pricing";
import { AVAILABLE_ROUTES } from "../routes";
import { TKRISK_MODULES } from "../tkrisk-modules";

export const QUOTES_STATUS = {
  CREATED: "CREATED",
}

export const QUOTES_TABLE = {
    columns: [
      {
        Header: 'Quote ID',
        accessor: 'id',
      },
      {
        Header: 'Quote Date',
        accessor: 'creationDate',
        type: CUSTOM_CELLS_TYPES.DATE,
      },
      {
        Header: 'Product',
        accessor: 'product',
      },
      {
        Header: 'License',
        accessor: 'license',
      },
      {
        Header: 'Subscription',
        accessor: 'subscriptionType',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ]
};

export const QUOTES_VIEWER = {
    title: 'Quotes #',
    attributes: [
      { title: 'Status', id: 'status'},
      { title: 'Product', id: 'product'},
      { title: 'License', id: 'license'},
      { title: 'Number of User', id: 'numUser'},
      { title: 'Subscription', id: 'subscriptionType'},
      { title: 'Message', id: 'message'},
    ]
}

const FIXED_SELECT_OPTIONS = [AVAILABLE_MODULES.GRAPH_CREATION]

export const MODULES_SELECT_OPTIONS = Object.entries(TKRISK_MODULES)
  .map(([moduleId, module]) => (
  { label: module.title, value: moduleId, isFixed: FIXED_SELECT_OPTIONS.includes(moduleId) }
))

export const COMMONS_LICENSES_INPUTS = {
      email: {
        type: CELL_TYPE.EMAIL,
        placeholder: "",
        label: "Email*",
        required: true,
      },
      city: {
        type: CELL_TYPE.TEXT,
        placeholder: "",
        label: "City*",
        required: true,
      },
      zipCode: {
        type: CELL_TYPE.TEXT,
        placeholder: "",
        label: "Zip Code*",
        required: true,
      },
      subscribedModules: {
        type: CELL_TYPE.SELECT,
        options: MODULES_SELECT_OPTIONS,
        label: "For product quotes, choose the modules that you are interested in.*",
        initialValue: [MODULES_SELECT_OPTIONS[0]],
        isMultiple: true,
        required: true,
      },
      numUser: {
        type: CELL_TYPE.NUMBER,
        placeholder: "",
        label: "Enter the number of users you plan to add.*",
        required: true,
        min: 1,
        max: 100,
        step: 1,
        isFloat: false,
      },
      message: {
        type: CELL_TYPE.TEXT_AREA,
        placeholder: "",
        label:
          "Please describe your application, interest, and timeframe.*",
        required: true,
      },
}

export const QUOTES_ANALYZE_FORM = {
    inputs: {
      ...COMMONS_LICENSES_INPUTS,
      organizationName: {
        type: CELL_TYPE.TEXT,
        placeholder: "",
        label: "Organization name*",
        required: true,
      }
    },
    steps: [
      {
        inputIds: ["email"],
        footer: {
          button: { name: "Continue" },
          messages: [
            {
              text: "We will not sell or rent your personal contact information.",
              link: { name: "See our privacy policy for details.", url: "/" },
            },
          ],
        },
      },
      {
        inputIds: [
          "email",
          "city",
          "zipCode",
          "organizationName",
          "subscribedModules",
          "numUser",
          "message",
        ],
        footer: {
          button: { name: "Submit" },
          messages: [
            {
              text: "We will not sell or rent your personal contact information.",
              link: { name: "See our privacy policy for details.", url: "/" },
            },
          ],
        },
      },
    ]
};

export const QUOTES_DEVELOP_FORM = {
  inputs: {
    ...COMMONS_LICENSES_INPUTS,
    organizationName: {
      type: CELL_TYPE.TEXT,
      placeholder: "",
      label: "Organization name*",
      required: true,
    }
  },
  steps: [
    {
      inputIds: ["email"],
      footer: {
        button: { name: "Continue" },
        messages: [
          {
            text: "We will not sell or rent your personal contact information.",
            link: { name: "See our privacy policy for details.", url: "/" },
          },
        ],
      },
    },
    {
      inputIds: [
        "email",
        "city",
        "zipCode",
        "organizationName",
        "numUser",
        "message",
      ],
      footer: {
        button: { name: "Submit" },
        messages: [
          {
            text: "We will not sell or rent your personal contact information.",
            link: { name: "See our privacy policy for details.", url: "/" },
          },
        ],
      },
    },
  ]
};

export const QUOTES_ENTERPRISE_FORM = {
  inputs: {
    ...COMMONS_LICENSES_INPUTS,
    organizationName: {
      type: CELL_TYPE.TEXT,
      placeholder: "",
      label: "Organization name*",
      required: true,
    }
  },
  steps: [
    {
      inputIds: ["email"],
      footer: {
        button: { name: "Continue" },
        messages: [
          {
            text: "We will not sell or rent your personal contact information.",
            link: { name: "See our privacy policy for details.", url: "/" },
          },
        ],
      },
    },
    {
      inputIds: [
        "email",
        "city",
        "zipCode",
        "organizationName",
        "numUser",
        "message",
      ],
      footer: {
        button: { name: "Submit" },
        messages: [
          {
            text: "We will not sell or rent your personal contact information.",
            link: { name: "See our privacy policy for details.", url: "/" },
          },
        ],
      },
    },
  ]
};

export const QUOTES_DISTRIBUTE_FORM = {
  inputs: {
    ...COMMONS_LICENSES_INPUTS,
    organizationName: {
      type: CELL_TYPE.TEXT,
      placeholder: "",
      label: "Organization name*",
      required: true,
    }
  },
  steps: [
    {
      inputIds: ["email"],
      footer: {
        button: { name: "Continue" },
        messages: [
          {
            text: "We will not sell or rent your personal contact information.",
            link: { name: "See our privacy policy for details.", url: "/" },
          },
        ],
      },
    },
    {
      inputIds: [
        "email",
        "city",
        "zipCode",
        "organizationName",
        "numUser",
        "message",
      ],
      footer: {
        button: { name: "Submit" },
        messages: [
          {
            text: "We will not sell or rent your personal contact information.",
            link: { name: "See our privacy policy for details.", url: "/" },
          },
        ],
      },
    },
  ]
};

export const QUOTES_FORM = {
    [CONTACT_FORM_TYPE.QUOTES.ANALYZE]: QUOTES_ANALYZE_FORM,
    [CONTACT_FORM_TYPE.QUOTES.DEVELOP]: QUOTES_DEVELOP_FORM,
    [CONTACT_FORM_TYPE.QUOTES.ENTERPRISE]: QUOTES_ENTERPRISE_FORM,
    [CONTACT_FORM_TYPE.QUOTES.DISTRIBUTE]: QUOTES_DISTRIBUTE_FORM
}

export const QUOTES_CONFIRMATION = {
  description: `Thank you for your interest in company. \n
  A TKRISK representative will contact you. \n
  For more information about products and services: \n`,
  otherResources: [
    { name: 'Review quotes requests.', url: AVAILABLE_ROUTES.tkQuotes, private: true },
    { name: 'Request trial software.', url: '/products/tkrisk/trial' },
    { name: 'View demos or tutorials.', url: '/resources' },
  ]
}