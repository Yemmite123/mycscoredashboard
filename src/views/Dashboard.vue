<template>
  <div class="dashboard container fluid">
    <div class="row summaries container fluid my-md-4 mx-0 px-0 px-md-2">
      <div
        class="col-sm-12 col-md-3 card card-1 mx-md-2 py-3 px-md-4 text-white d-flex flex-column justify-content-between my-2"
      >
        <p class="m-0 header">Koko Loan</p>
        <div class="m-0 body py-4">Risk Board</div>
      </div>
      <div
        class="col-sm-12 col-md-3 card card-2 mx-md-2 py-3 px-md-4 text-white d-flex flex-column justify-content-between my-2"
      >
        <p class="m-0 header">Risk Identified</p>
        <div class="m-0 body py-2">
          <h2 class="my-2 font-weight-bolder font-heavy">200</h2>
          <p class="my-0">
            Worth:
            <span class="font-weight-bold font-heavy">&#8358;20,000.00</span>
          </p>
        </div>
      </div>
      <div
        class="col-sm-12 col-md-3 card card-3 mx-md-2 py-3 px-md-4 text-white d-flex flex-column justify-content-between my-2"
      >
        <p class="m-0 header">Loss Given Default</p>
        <div class="m-0 body py-2">
          <p class="my-0">
            Worth:
            <span class="font-weight-bold font-heavy">&#8358;20,000.00</span>
          </p>
        </div>
      </div>
      <div
        class="col-sm-12 col-md-3 card card-4 mx-md-2 py-3 px-md-4 text-white d-flex flex-column justify-content-between my-2"
      >
        <p class="m-0 header">Exposure at Default</p>
        <div class="m-0 body py-2">
          <p class="my-0">
            Worth:
            <span class="font-weight-bold font-heavy">&#8358;20,000.00</span>
          </p>
        </div>
      </div>
    </div>
    <div class="row stats-and-charts container fluid my-4 mx-0 px-0 px-md-2">
      <div class="col-sm-12 col-md-9 px-0 px-md-2">
        <b-card header-tag="header" header-class="bg-white border-bottom-0" body-class="p-0">
          <template v-slot:header>
            <div class="d-flex justify-content-between align-items-center border-bottom-0">
              <p class="m-0">Today's Statistics</p>
              <button class="btn btn-sm btn-outline-warning">View Details</button>
            </div>
          </template>
          <b-table
            table-class="text-center text-cgray stats-table"
            thead-tr-class="text-dark border-bottom-0"
            :fields="statisticsFields"
            :items="statistics"
          ></b-table>
        </b-card>
        <div class="row my-4">
          <div class="col-sm-12 col-md-8 mb-4">
            <b-card
              header-tag="header"
              header-class="bg-white p-3"
              body-class="text-left px-0 py-1"
              style="min-height:30rem;"
            >
              <template v-slot:header>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="m-0 text-cgray">Risk Chart</p>
                </div>
              </template>
              <div class="bar-legend d-flex justify-content-end mx-3 align-items-center">
                <div class="legend d-flex align-items-center mx-2">
                  <div class="tile bg-cblue mx-1"></div>
                  <div class="label text-cblue">Non Default</div>
                </div>
                <div class="legend d-flex align-items-center mx-2">
                  <div class="tile bg-corange mx-1"></div>
                  <div class="label text-corange">Default</div>
                </div>
              </div>
              <bar-chart
                id="bar"
                hideHover="auto"
                :data="barData"
                xkey="x"
                :ykeys="barYKeys"
                resize="true"
                :labels="barLabels"
                :bar-colors="barColors"
                grid="true"
                grid-text-weight="bold"
              ></bar-chart>
            </b-card>
          </div>
          <div  class="col-sm-12 col-md-4">
            <b-card style="height:94%"
              header-tag="header"
              header-class="bg-white"
              body-class="text-left px-0 d-flex justify-content-center"
            >
              <template v-slot:header>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="m-0 text-cgray">Risk Matrix</p>
                </div>
              </template>
             
              <div  class="d-flex flex-wrap justify-content-center risk-matrix-grid mx-4 my-4">
                <div
                  :key="Math.random() + box.color"
                  v-for="box in riskMatrixData"
                  class="box d-flex justify-content-center align-items-center"
                  :style="`background-color:${box.color}`"
                >
                  <span class="text-white font-heavy">{{ box.label }}</span>
                </div>
                 
              </div>
            </b-card>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-3 analytics px-0 px-md-2">
        <b-card header-tag="header" header-class="bg-white" body-class="text-left px-0 py-2">
          <template v-slot:header>
            <div class="d-flex justify-content-between align-items-center">
              <p class="m-0">Analytics</p>
            </div>
          </template>
          <vc-donut
            background="white"
            foreground="grey"
            :size="200"
            unit="px"
            :thickness="30"
            legend-placement="bottom"
            :sections="analysisSections"
            :total="100"
            :start-angle="-45"
            :auto-adjust-text-size="true"
            @section-mouseover="handleSectionHover"
          >
            <h1 class="m-0">{{ selectedSection.value }}%</h1>
          </vc-donut>
          <div class="analytics-legend my-3 mx-2">
            <div v-for="section in analysisSections" :key="section.label">
              <span
                :title="`${section.label} (${section.value}%)`"
                class="cdc-legend-item my-0"
                style="font-size:0.75rem"
              >
                <span class="cdc-legend-item-color" :style="`background-color: ${section.color};`"></span>
                <span>{{ section.label }}</span>
              </span>
            </div>
          </div>
        </b-card>
        <div class="my-3"></div>
        <b-card header-tag="header" header-class="bg-white" body-class="text-left px-0">
          <template v-slot:header>
            <div class="d-flex justify-content-between align-items-center">
              <p class="m-0 text-cgray">Approved Loans</p>
            </div>
          </template>
          <h1 class="font-heavy my-2 mx-2 text-center text-cblue">2000</h1>
        </b-card>
        <div class="my-3"></div>
        <b-card header-tag="header" header-class="bg-white" body-class="text-left px-0">
          <template v-slot:header>
            <div class="d-flex justify-content-between align-items-center">
              <p class="m-0 text-cgray">Rejected Loans</p>
            </div>
          </template>
          <h1 class="font-heavy my-2 mx-2 text-center text-danger">100</h1>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import Raphael from "raphael/raphael";
global.Raphael = Raphael;
import { BarChart } from "vue-morris";

export default {
  components: {
    BarChart
  },
  data: () => ({
    statisticsFields: [
      {
        key: "applicant_id",
        label: "Applicant ID",
      },
      {
        key: "cash_deposited",
        label: "Cash Deposited",
      },
      {
        key: "beneficiary_name",
        label: "Beneficiary Name",
      }
    ],
    statistics: [
      {
        applicant_id: 50,
        cash_deposited: "800,000.00",
        beneficiary_name: "Olaniyi Raheem"
      },
      {
        applicant_id: 25,
        cash_deposited: "500,000.00",
        beneficiary_name: "Olaniyi Raheem"
      },
      {
        applicant_id: 250,
        cash_deposited: "100,000.00",
        beneficiary_name: "Olaniyi Raheem"
      }
    ],
    analysisSections: [
      { label: "Personal Loan", value: 15, color: "#8AC0FF" },
      { label: "Business Loan", value: 10, color: "#F392AD" },
      { label: "Student Loan", value: 40, color: "#55C492" },
      { label: "Mortgage Loan", value: 30, color: "#8E35E6" },
      { label: "Other", value: 5, color: "#F59B0C" }
    ],
    selectedSection: {},
    barData: [
      { x: "Week 1", default: 654, non_default: 280 },
      { x: "Week 2", default: 399, non_default: 78 },
      { x: "Week 3", default: 800, non_default: 400 },
      { x: "Week 4", default: 400, non_default: 200 },
    ],
    barYKeys: `[ "default", "non_default" ]`,
    barLabels: `[ "Default", "Non Default" ]`,
    barColors: `[ "#F69409","#001B9B" ]`,
    riskMatrixData: [
      { label: null, color: "#C1FE4E" },
      { label: null, color: "#FFFB6D" },
      { label: 7, color: "#FF9800" },
      { label: 8, color: "#FD4A05" },
      { label: null, color: "#9BFE49" },
      { label: null, color: "#E8FC5F" },
      { label: null, color: "#FFFE63" },
      { label: 5, color: "#F59B0C" },
      { label: null, color: "#6AFE3D" },
      { label: null, color: "#BBFE4E" },
      { label: null, color: "#E5FE60" },
      { label: null, color: "#E5FE60" },
      { label: null, color: "#38EF00" },
      { label: null, color: "#6AFE3D" },
      { label: null, color: "#BBFE4E" },
      { label: null, color: "#E5FE60" }
    ]
  }),
  mounted() {
    this.selectedSection = this.analysisSections[0];
  },
  methods: {
    osColors() {
      console.log("osColors");
      return [];
    },
    handleSectionHover(section) {
      this.selectedSection = section;
    }
  }
};
</script>

<style scoped lang="scss">
$dim-color: #f1f3f9;
$c-gray: #707070;
.text-cgray {
  color: $c-gray !important;
}
.dashboard,
.summaries,
.stats-and-charts {
  max-width: 100%;
}
.summaries {
  .card {
    @media (min-width: 768px) {
      max-width: calc((100% - 5rem) / 4) !important;
    }
    min-height: 9rem;
  }
  .card-1 {
    background: transparent linear-gradient(120deg, #9496e9 0%, #54559a 100%) 0%
      0% no-repeat padding-box;
    border-radius: 10px;
  }
  .card-2 {
    background: transparent linear-gradient(119deg, #c592f9 0%, #8158aa 100%) 0%
      0% no-repeat padding-box;
    border-radius: 10px;
  }
  .card-3 {
    background: transparent linear-gradient(120deg, #fc9b8c 0%, #e09946 100%) 0%
      0% no-repeat padding-box;
    border-radius: 10px;
  }
  .card-4 {
    background: transparent linear-gradient(120deg, #85e2d3 0%, #2dbdc3 100%) 0%
      0% no-repeat padding-box;
    border-radius: 10px;
  }
}
.stats-and-charts {
  .stat-tbody {
    .row td {
      color: red !important;
    }
  }
}
.risk-matrix-grid {
  height: 12rem;
  width: 12rem;
  @media (min-width: 1400px) {
    height: 16rem;
    width: 16rem;
  }
  div.box {
    width: calc(100% / 4);
    height: calc(100% / 4);
  }
}
.bar-legend {
  .legend {
    .tile {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    .label {
      font-size: 0.75rem;
      @media(min-width: 1400px) {
        height: 12px;
      }
    }
  }
}
</style>