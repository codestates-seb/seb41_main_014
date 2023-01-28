// import styled from '@emotion/styled';
// import PropTypes from 'prop-types';

// const GoalEditModal = (props) => {
//   const { open, close, header, goalPatch, id } = props;

//   return (
//     <Div>
//       <div className={open ? 'openModal modal' : 'modal'}>
//         {open ? (
//           <section>
//             <header>
//               {header}
//               <button className="close" onClick={close}>
//                 &times;
//               </button>
//             </header>
//             <main>?</main>
//             <footer>
//               <button className="close" onClick={goalPatch} data-id={id}>
//                 Edit
//               </button>
//               <button
//                 className="close"
//                 onClick={close}
//                 style={{ marginLeft: '20px' }}
//               >
//                 close
//               </button>
//             </footer>
//           </section>
//         ) : null}
//       </div>
//     </Div>
//   );
// };

// export default GoalEditModal;

// GoalEditModal.propTypes = {
//   open: PropTypes.func,
//   close: PropTypes.func,
//   header: PropTypes.string,
//   goalPatch: PropTypes.func,
//   id: PropTypes.number,
// };

// const Div = styled.div`
//   .modal {
//     display: none;
//     position: fixed;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, 0.6);
//     z-index: 99999;
//   }

//   .modal.openModal {
//     display: flex;
//     align-items: center;
//     /* 팝업이 열릴때 스르륵 열리는 효과 */
//     animation: modal-bg-show 0.3s;
//   }
// `;
