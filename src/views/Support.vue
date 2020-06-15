<template>
  <div class="support d-flex justify-content-center container fluid">
    <div class="support-tabs container fluid my-4 mx-0 mx-md-4 bg-white px-md-4 py-2 px-0 rounded">
      <div
        class="ticket-back-button my-2"
        v-if="showTicketForm"
        @click="showTicketForm = false"
        style="cursor:pointer"
      >
        <img src="../assets/images/right-arrow.svg" alt style="height:15px;width:15px;" />
        <span class="text-cblue mx-2" style="font-size:.8rem">Back</span>
      </div>
      <b-tabs content-class="mt-3">
        <b-tab title="FAQs" active>
          <div class="question my-2" v-for="question in faqs" :key="Math.random() + question.title">
            <div
              class="title text-cblue bg-cgray p-4 d-flex justif-content-between position-relative"
              @click="question.visible = !question.visible"
            >
              <div class="m-0 p-0">{{question.title}}</div>
              <div :class="{action: true, aclose: question.visible, open: !question.visible}"></div>
            </div>
            <div class="question-body p-4" :class="{'d-none': !question.visible}">{{question.body}}</div>
           
          </div>
          <br>
           <p style="color: #00105C; opacity: 0.75; font-family:ObjectSans Regular;">Can’t find the answer you're looking for? Email our member support team hello@mycscore.com</p>
        </b-tab>
        
        <b-tab title="Documentation">
          <div class="segment p-1" v-for="i in 3" :key="i">
            <h4 class="m-2 text-cblue font-weight-bold py-2">ScoreCard API</h4>
            <p class="m-2 how-to-use text-cblue">How to use</p>
            <p
              class="m-2 text-cblue"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe</p>
          </div>
        </b-tab>
        <b-tab title="Tickets" active>
          <div class="row ticket-form-row" v-if="showTicketForm">
            <div class="col-sm-12 col-md-5">
              <div class="ticket-form">
                <b-form>
                  <b-form-group>
                    <b-form-select v-model="form.category" :options="ticketCategories" required></b-form-select>
                  </b-form-group>
                  <b-form-group>
                    <b-form-textarea placeholder="Other message" v-model="form.message"></b-form-textarea>
                  </b-form-group>
                  <button
                    class="btn btn-primary text-white bg-cdarkblue py-2 px-4 mb-4"
                    style="font-size:.8rem;"
                  >Submit</button>
                </b-form>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="d-flex justify-content-end mx-2 my-3">
              <button
                @click="showTicketForm = true"
                class="btn btn-primary text-white bg-cdarkblue py-2"
              >&#43;Add a new Ticket</button>
            </div>
            <b-table
              hover
              borderless
              striped
              table-class="text-cblue"
              :fields="ticketsFields"
              thead-tr-class="text-cblue"
              tbody-tr-class="ticket-row"
              :items="tickets"
            >
              <template v-slot:cell(status)="data">
                <div class="d-flex justify-content-start align-items-center">
                  <div
                    :class="{'bg-corange': data.value=='ongoing', 'bg-cgreen': data.value=='complete'}"
                    class="mx-2 p-0 rounded-circle text-left"
                    style="height:10px;width:10px;"
                  ></div>
                  {{data.value}}
                </div>
              </template>
            </b-table>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    ticketCategories: [
      { text: "Category", value: null },
      "Carrots",
      "Beans",
      "Tomatoes",
      "Corn"
    ],
    form: {
      category: null,
      message: null
    },
    showTicketForm: false,
    faqs: [
      {
        title: "What is MYCScore?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        visible: true
      },
      {
        title: "What is MYCScore?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        visible: false
      },
      {
        title: "What is MYCScore?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        visible: false
      },
      {
        title: "What is MYCScore?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        visible: false
      },
      {
        title: "What is MYCScore?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        visible: false
      }
    ],
    tickets: [
      {
        ticket_id: "001",
        category: "Complaint",
        other_message: "Problem starting campagin last week",
        status: "ongoing",
        date_added: "Jan 10, 2019"
      },
      {
        ticket_id: "002",
        category: "Bug Report",
        other_message: "Problem starting campagin last week",
        status: "ongoing",
        date_added: "Jan 10, 2019"
      },
      {
        ticket_id: "003",
        category: "Api Documentation",
        other_message: "Problem starting campagin last week",
        status: "ongoing",
        date_added: "Jan 10, 2019"
      },
      {
        ticket_id: "004",
        category: "Dashboard Setup",
        other_message: "Problem starting campagin last week",
        status: "complete",
        date_added: "Jan 10, 2019"
      },
      {
        ticket_id: "005",
        category: "Complaint",
        other_message: "Problem starting campagin last week",
        status: "complete",
        date_added: "Jan 10, 2019"
      },
      {
        ticket_id: "006",
        category: "Dashboar Setup",
        other_message: "Problem starting campagin last week",
        status: "ongoing",
        date_added: "Jan 10, 2019"
      },
      {
        ticket_id: "007",
        category: "Api Documentation",
        other_message: "Problem starting campagin last week",
        status: "ongoing",
        date_added: "Jan 10, 2019"
      },
      {
        ticket_id: "008",
        category: "Complaint",
        other_message: "Problem starting campagin last week",
        status: "complete",
        date_added: "Jan 10, 2019"
      }
    ],
    ticketsFields: [
      {
        key: "ticket_id",
        label: "Ticket ID"
      },
      {
        key: "category",
        label: "Category"
      },
      {
        key: "other_message",
        label: "Other message"
      },
      {
        key: "status",
        label: "Status"
      },
      {
        key: "date_added",
        label: "Date Added"
      }
    ]
  })
};
</script>
<style lang="scss">
$dim-color: #f1f3f9;
$c-gray: #00000029;
$dim-color: #f1f3f9;
$blue-color: #171df9;
$text-blue-color: #001b9b;
$orange-color: #f69409;
$green-color: #6bdb42;
.bg-dim {
  background-color: $dim-color !important;
}
.text-dim {
  color: $dim-color !important;
}
.bg-cblue {
  background-color: $blue-color !important;
}
.text-cblue {
  color: $text-blue-color !important;
}
.bg-cdarkblue {
  background-color: $text-blue-color !important;
}
.bg-corange {
  background-color: $orange-color !important;
}
.text-corange {
  color: $orange-color !important;
}
.text-cgreen {
  color: $green-color !important;
}
.bg-cgreen {
  background-color: $green-color !important;
}
.text-cgray {
  color: $c-gray !important;
}
.bg-cgray {
  background-color: $c-gray !important;
}
.support,
.support-tabs {
  max-width: 100%;
  width: 100%;
  overflow-x: scroll;
  .segment {
    .how-to-use {
      font-size: 1.2rem;
    }
  }
  .question {
    .title {
      cursor: pointer;
      .action {
        &.open {
          &:after {
            content: "";
            position: absolute;
            background: $orange-color;
            right: 2rem;
            width: 4px;
            height: 1.5rem;
            border-radius: 6px;
          }
          &:before {
            content: "";
            position: absolute;
            background: $orange-color;
            right: 2rem;
            width: 4px;
            height: 1.5rem;
            transform: rotate(90deg);
            border-radius: 6px;
          }
        }
        &.aclose {
          &:after {
            content: "";
            position: absolute;
            background: $orange-color;
            right: 2rem;
            width: 4px;
            height: 1.5rem;
            border-radius: 6px;
            transform: rotate(45deg);
          }
          &:before {
            content: "";
            position: absolute;
            background: $orange-color;
            right: 2rem;
            width: 4px;
            height: 1.5rem;
            transform: rotate(135deg);
            border-radius: 6px;
          }
        }
      }
    }
  }
}
.ticket-row {
  height: 4rem !important;
}
.ticket-form {
  .custom-select {
    background: #fff url(../assets/images/down-arrow.svg) no-repeat right
      0.75rem center/8px 10px !important;
    color: $blue-color !important;
    border-color: $blue-color !important;
    font-size: 0.8rem;
    height: 3rem;
    padding: 0.8rem 1rem;
  }
  textarea.form-control {
    min-height: 10rem;
    border-color: $blue-color;
    padding: 0.8rem 1rem;
    &::placeholder {
      color: $blue-color;
    }
  }
}
.ticket-form-row {
  @media (max-width: 768px) {
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important;
  }
}
</style>