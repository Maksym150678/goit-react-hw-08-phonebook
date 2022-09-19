"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[36],{8348:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var a=t(885),o=t(2791),r={list:"phonebook-list_list__MJ3cZ",item:"phonebook-list_item__tD8PV","filter-title":"phonebook-list_filter-title__TjVNI",buttonDelete:"phonebook-list_buttonDelete__iQcnO"},s=t(184),l=function(e){var n=e.phoneList,t=e.onDeletePhoneListItem,a=e.onClick;return(0,s.jsx)("ul",{className:r.list,children:n.map((function(e){var n=e.id,o=e.name,l=e.number;return(0,s.jsxs)("li",{className:r.phonebookListItem,onClick:a,children:[(0,s.jsx)("p",{className:r.nameText,children:o}),(0,s.jsx)("p",{className:r.phoneNumber,children:l}),(0,s.jsx)("button",{className:r.buttonDelete,onClick:function(){return t(n)},children:"Delete"})]},n)}))})},c=t(5984),i={form:"form-add-phonebook_form__HAb1a",label:"form-add-phonebook_label__GET3L",subtitle:"form-add-phonebook_subtitle__V6w1F",input:"form-add-phonebook_input__Ij+nC",btn:"form-add-phonebook_btn__CqnhJ"};var u=function(e){var n=e.onSubmit,t=(0,o.useState)(""),r=(0,a.Z)(t,2),l=r[0],u=r[1],d=(0,o.useState)(""),m=(0,a.Z)(d,2),h=m[0],_=m[1],p=(0,c.x0)(),b=(0,c.x0)(),f=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":u(a);break;case"phone":_(a);break;default:return}},C=function(){u(""),_("")};return(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({name:l,phone:h}),C()},className:i.form,children:[(0,s.jsx)("h1",{className:i.title,children:"Phonebook"}),(0,s.jsxs)("label",{htmlFor:p,className:i.label,children:[(0,s.jsx)("h2",{className:i.subtitle,children:"Name"}),(0,s.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:i.input,value:l,onChange:f,id:p,placeholder:"Enter name"})]}),(0,s.jsxs)("label",{htmlFor:b,className:i.label,children:[(0,s.jsx)("h2",{className:i.subtitle,children:"Number"}),(0,s.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,className:i.input,value:h,onChange:f,id:b,placeholder:"Enter the phone number"})]}),(0,s.jsx)("button",{className:i.btn,type:"submit",children:"Add contact"})]})},d="filter_filter__3Onbh",m="filter_label__k4Jq2",h="filter_title__CO0XC",_="filter_input_filter__o7Me5",p=function(e){var n=e.value,t=e.onChange;return(0,s.jsxs)("div",{className:d,children:[(0,s.jsx)("h2",{className:h,children:"Contacts"}),(0,s.jsxs)("label",{className:m,children:["Find contacts by name",(0,s.jsx)("input",{className:_,type:"text",name:"name",value:n,onChange:t})]})]})},b=t(4164),f="Modal_overlay__vk2m-",C="Modal_modal__content__GWRBS",x=function(e){var n=e.onClose,t=e.children,a=document.querySelector("#modal-root");(0,o.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&n()};return(0,b.createPortal)((0,s.jsx)("div",{className:f,onClick:function(e){e.currentTarget===e.target&&n()},children:(0,s.jsx)("div",{className:C,children:t})}),a)},v=t(9434),N=t(7374),g={changeContact:"FormChangeContact_changeContact__wkKQM",label:"FormChangeContact_label__HYk6q",input:"FormChangeContact_input__9a7n4"},j=function(e){var n=e.findContact,t=e.onClose,r=(0,o.useState)(n.name),l=(0,a.Z)(r,2),i=l[0],u=l[1],d=(0,o.useState)(n.number),m=(0,a.Z)(d,2),h=m[0],_=m[1],p=(0,c.x0)(),b=(0,c.x0)(),f=(0,v.I0)(),C=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":u(a);break;case"phone":_(a);break;default:return}},x=function(e){e.preventDefault();var a={id:n.id,name:i,number:h};f((0,N.Og)(a)),j(),t()},j=function(){u(""),_("")};return(0,s.jsxs)("form",{onSubmit:x,className:g.form,children:[(0,s.jsx)("label",{htmlFor:p,className:g.label,children:(0,s.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Input name",className:g.input,value:i,onChange:C,id:p})}),(0,s.jsx)("label",{htmlFor:b,className:g.label,children:(0,s.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Input number",className:g.input,value:h,onChange:C,id:b})}),(0,s.jsx)("button",{type:"submit",className:g.changeContact,onSubmit:x,children:"Change contact"})]})},k=t(1038),y=function(e){return e.contacts},w=function(e){return e.filter},S={title__change:"ContactsPage_title__change__1bNaX",contact__name:"ContactsPage_contact__name__o110v",modal__close:"ContactsPage_modal__close__CD0Ws"},A=function(){var e=(0,o.useState)(!1),n=(0,a.Z)(e,2),t=n[0],r=n[1],c=(0,o.useState)({}),i=(0,a.Z)(c,2),d=i[0],m=i[1],h=(0,v.v9)(y).loading,_=(0,v.v9)(w),b=(0,v.I0)();(0,o.useEffect)((function(){b((0,N.yF)())}),[b]);var f=(0,v.v9)((function(e){return e.contacts.items.filter((function(n){return n.name.toLowerCase().includes(e.filter.toLocaleLowerCase())}))})),C=function(){r(!t)};return(0,s.jsxs)("div",{children:[(0,s.jsx)(u,{onSubmit:function(e){var n=(0,N.$)(e);b(n)}}),(0,s.jsx)(p,{value:_,onChange:function(e){var n=(0,k.K)(e.currentTarget.value);b(n)}}),h&&(0,s.jsx)("p",{children:"...Loading"}),(0,s.jsx)(l,{phoneList:f,onDeletePhoneListItem:function(e){var n=(0,N._f)(e);b(n)},onClick:function(e){var n=f.find((function(n){return n.id.toString()===e.currentTarget.id}));m(n),C()}}),t&&(0,s.jsxs)(x,{onClose:C,children:[(0,s.jsx)("h2",{className:S.title__change,children:"CHANGE CONTACT"}),(0,s.jsxs)("div",{className:S.contact,children:[(0,s.jsxs)("p",{className:S.contact__name,children:["Name: ",d.name]}),(0,s.jsxs)("p",{className:S.contact__name,children:["Tel: ",d.number]})]}),(0,s.jsx)("button",{type:"button",onClick:C,className:S.modal__close,children:"close"}),(0,s.jsx)(j,{onClose:C,findContact:d})]})]})}},5984:function(e,n,t){t.d(n,{x0:function(){return a}});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=36.423bf05b.chunk.js.map