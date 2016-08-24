// Options
AccountsTemplates.configure({
  defaultLayout: 'masterLayout',
  defaultLayoutRegions: {
    nav: 'nav',
    footer: 'footer',
    header: 'header',
  },
  defaultContentRegion: 'main',
  showForgotPasswordLink: true,
  overrideLoginErrors: true,
  enablePasswordChange: true,

  // sendVerificationEmail: true,
  // enforceEmailVerification: true,
  //confirmPassword: true,
  //continuousValidation: false,
  //displayFormLabels: true,
  //forbidClientAccountCreation: true,
  //formValidationFeedback: true,
  //homeRoutePath: '/',
  //showAddRemoveServices: false,
  //showPlaceholders: true,

  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: true,

  // Privacy Policy and Terms of Use
  //privacyUrl: 'privacy',
  //termsUrl: 'terms-of-use',
});

AccountsTemplates.addFields([
{
  _id: 'first_name',
  type: 'text',
  displayName: "First Name",
  placeholder: "First Name",
  label: "First Name",
  required: true,
},
{
  _id: 'last_name',
  type: 'text',
  displayName: "Last Name",
  placeholder: "Last Name",
  label: "Last Name",
  required: true,
},
{
  _id: 'user_name',
  type: 'text',
  displayName: "User Name",
  placeholder: "User Name",
  label: "User Name",
  required: true,
},



]);
