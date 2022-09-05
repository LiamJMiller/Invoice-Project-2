/* <form id="">
  <select>
    <option value="" selected="selected">Select Site</option>
    <option>Waterside Essex</option>
    <option>Dunton Court</option>
    <option>New Forest Glades</option>
    <option>Milford on sea</option>
    <option>Leicester</option>
    <option>Did Not Work</option>
  </select>
</form>

<form id="">
  <select>
    <option value="" selected="selected">Select Shift</option>
    <option>Day</option>
    <option>Night</option>
    <option>Double</option>
    <option>Did Not Work</option>
    <option>Holiday</option>
  </select>
</form>

<form id="">
  <select>
    <option value="" selected="selected">Select Pay</option>
    <option>150</option>
    <option>300</option>
    <option>450</option>
    <option>Did Not Work</option>
  </select>
</form> */

///////////////////////
// const invoiceTemplate = document.createElement("template");
// invoiceTemplate.innerHTML = `
//   <form id="invoiceTable">
//     <table class="table">
//       <tr>
//         <th>WeekDay</th>
//         <th>date</th>
//         <th>Site</th>
//         <th>Shift</th>
//         <th>Rate</th>
//       </tr>
//       <tr>
//         <td>Monday</td>
//         <td>4</td>
//         <td>
//           <form id="monSite">
//             <select>
//               <option value="" selected="selected">
//                 Select Site
//               </option>
//               <option>Waterside Essex</option>
//               <option>Dunton Court</option>
//               <option>New Forest Glades</option>
//               <option>Milford on sea</option>
//               <option>Leicester</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="monShift">
//             <select>
//               <option value="" selected="selected">
//                 Select Shift
//               </option>
//               <option>Day</option>
//               <option>Night</option>
//               <option>Double</option>
//               <option>Did Not Work</option>
//               <option>Holiday</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="monPay">
//             <select>
//               <option value="" selected="selected">
//                 Select Pay
//               </option>
//               <option>150</option>
//               <option>300</option>
//               <option>450</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//       </tr>
//       <tr>
//         <td>Tuesday</td>
//         <td>4</td>
//         <td>
//           <form id="tueSite">
//             <select>
//               <option value="" selected="selected">
//                 Select Site
//               </option>
//               <option>Waterside Essex</option>
//               <option>Dunton Court</option>
//               <option>New Forest Glades</option>
//               <option>Milford on sea</option>
//               <option>Leicester</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="tueShift">
//             <select>
//               <option value="" selected="selected">
//                 Select Shift
//               </option>
//               <option>Day</option>
//               <option>Night</option>
//               <option>Double</option>
//               <option>Did Not Work</option>
//               <option>Holiday</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="tuePay">
//             <select>
//               <option value="" selected="selected">
//                 Select Pay
//               </option>
//               <option>150</option>
//               <option>300</option>
//               <option>450</option>

//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//       </tr>
//       <tr>
//         <td>Wednesday</td>
//         <td>4</td>
//         <td>
//           <form id="wedSite">
//             <select>
//               <option value="" selected="selected">
//                 Select Site
//               </option>
//               <option>Waterside Essex</option>
//               <option>Dunton Court</option>
//               <option>New Forest Glades</option>
//               <option>Milford on sea</option>
//               <option>Leicester</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="wedShift">
//             <select>
//               <option value="" selected="selected">
//                 Select Shift
//               </option>
//               <option>Day</option>
//               <option>Night</option>
//               <option>Double</option>
//               <option>Did Not Work</option>
//               <option>Holiday</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="wedPay">
//             <select>
//               <option value="" selected="selected">
//                 Select Pay
//               </option>
//               <option>150</option>
//               <option>300</option>0<option>450</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//       </tr>
//       <tr>
//         <td>Thursday</td>
//         <td>4</td>
//         <td>
//           <form id="ThuSite">
//             <select>
//               <option value="" selected="selected">
//                 Select Site
//               </option>
//               <option>Waterside Essex</option>
//               <option>Dunton Court</option>
//               <option>New Forest Glades</option>
//               <option>Milford on sea</option>
//               <option>Leicester</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="ThuShift">
//             <select>
//               <option value="" selected="selected">
//                 Select Shift
//               </option>
//               <option>Day</option>
//               <option>Night</option>
//               <option>Double</option>
//               <option>Did Not Work</option>
//               <option>Holiday</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="ThuPay">
//             <select>
//               <option value="" selected="selected">
//                 Select Pay
//               </option>
//               <option>150</option>
//               <option>300</option>
//               <option>450</option>

//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//       </tr>
//       <tr>
//         <td>Friday</td>
//         <td>4</td>
//         <td>
//           <form id="friSite">
//             <select>
//               <option value="" selected="selected">
//                 Select Site
//               </option>
//               <option>Waterside Essex</option>
//               <option>Dunton Court</option>
//               <option>New Forest Glades</option>
//               <option>Milford on sea</option>
//               <option>Leicester</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="FriShift">
//             <select>
//               <option value="" selected="selected">
//                 Select Shift
//               </option>
//               <option>Day</option>
//               <option>Night</option>
//               <option>Double</option>
//               <option>Did Not Work</option>
//               <option>Holiday</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="FriPay">
//             <select>
//               <option value="" selected="selected">
//                 Select Pay
//               </option>
//               <option>150</option>
//               <option>300</option>
//               <option>450</option>

//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//       </tr>
//       <tr>
//         <td>Saturday</td>
//         <td>4</td>
//         <td>
//           <form id="satSite">
//             <select>
//               <option value="" selected="selected">
//                 Select Site
//               </option>
//               <option>Waterside Essex</option>
//               <option>Dunton Court</option>
//               <option>New Forest Glades</option>
//               <option>Milford on sea</option>
//               <option>Leicester</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="satShift">
//             <select>
//               <option value="" selected="selected">
//                 Select Shift
//               </option>
//               <option>Day</option>
//               <option>Night</option>
//               <option>Double</option>
//               <option>Did Not Work</option>
//               <option>Holiday</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="satPay">
//             <select>
//               <option value="" selected="selected">
//                 Select Pay
//               </option>
//               <option>150</option>
//               <option>300</option>
//               <option>450</option>

//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//       </tr>
//       <tr>
//         <td>Sunday</td>
//         <td>4</td>
//         <td>
//           <form id="sunSite">
//             <select>
//               <option value="" selected="selected">
//                 Select Site
//               </option>
//               <option>Waterside Essex</option>
//               <option>Dunton Court</option>
//               <option>New Forest Glades</option>
//               <option>Milford on sea</option>
//               <option>Leicester</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="sunShift">
//             <select>
//               <option value="" selected="selected">
//                 Select Shift
//               </option>
//               <option>Day</option>
//               <option>Night</option>
//               <option>Double</option>
//               <option>Did Not Work</option>
//               <option>Holiday</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="sunPay">
//             <select>
//               <option value="" selected="selected">
//                 Select Pay
//               </option>
//               <option>150</option>
//               <option>300</option>
//               <option>450</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//       </tr>
//       <tr id="totals">
//         <th>Totals</th>
//         <td>------</td>
//         <td>total Days</td>
//         <td>total Shifts</td>
//         <td>Total Rate</td>
//       </tr>
//     </table>
//     <button class="button">Submit grid</button>
//   </form>
// `;
// class invoiceTable extends HTMLTableElement {
//   constructor() {
//     super();
//   }
//   connectedCallback() {
//     const shadowRoot = this.attachShadow({ mode: "open" });
//     shadowRoot.appendChild(invoiceTemplate.content);
//   }
// }

// customElements.define("header-component", Header);
//////////////////////

const siteSelector = document.createElement("form");
siteSelector.innerHTML = `  
<select>
<option value="" selected="selected">Select Site</option>
<option>Waterside Essex</option>
<option>Dunton Court</option>
<option>New Forest Glades</option>
<option>Milford on sea</option>
<option>Leicester</option>
<option>Did Not Work</option>
</select>`;
class siteDropdown extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(siteSelector.content);
  }
}
