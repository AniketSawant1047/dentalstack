import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },

  {
    path: '/color',
    name: 'color',
    component: () => import('../components/StyleConfig.vue')
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: () => import('../views/Login/SignUpView.vue'),
    children:[
      {
        path: '/DoctorSignUp',
        name: 'DoctorSignUp',
        component: () => import('../views/Login/DoctorSignUpView.vue')
      },
      {
        path: '/AdminSignUp',
        name: 'AdminSignUp',
        component: () => import('../views/Login/AdminSignUpView.vue')
      },
    ]
  },
  
  {
    path: '/signups',
    name: 'signups',
    component: () => import('../views/Login/SignupView.vue')
  },
  {
    path: '/HomePage',
    name: 'HomePageView',
    component: () => import('../views/Home-Dashboard/HomePageView.vue'),
    children:[
      {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () => import('../views/Home-Dashboard/DashboardView.vue')
      },
      {
        path: '/Production',
        name: 'Production',
        component: () => import('../views/Production/ProductionView.vue')
      },
      {
        path: '/AdminRegister',
        name: 'AdminRegister',
        component: () => import('../views/Admin/AdminRegisterView.vue')
      },
      {
        path: '/AdminList',
        name: 'AdminList',
        component: () => import('../views/Admin/AdminListView.vue')
      },
      {
        path: '/BusinessRegister',
        name: 'BusinessRegister',
        component: () => import('../views/Business/BusinessFormView.vue')
      },
      {
        path: '/BusinessList',
        name: 'BusinessList',
        component: () => import('../views/Business/BusinessListView.vue')
      },
      {
        path: '/ClinicRegister',
        name: 'ClinicRegister',
        component: () => import('../views/Clinics/ClinicRegistrationView.vue')
      },
      {
        path: '/ClinicList',
        name: 'ClinicList',
        component: () => import('../views/Clinics/ClinicListView.vue')
      },
      {
        path: '/DoctorDashboard',
        name: 'DoctorDashboard',
        component: () => import('../views/Doctors/DoctorDashboard.vue')
      },
      {
        path: '/DoctorRegister',
        name: 'DoctorRegister',
        component: () => import('../views/Doctors/DoctorRegistrationView.vue')
      },
      {
        path: '/DoctorList',
        name: 'DoctorList',
        component: () => import('../views/Doctors/DoctorListView.vue')
      },
      {
        path: '/PatientRegister',
        name: 'PatientRegister',
        component: () => import('../views/Patients/PatientRegistrationView.vue')
      },
      {
        path: '/PatientList',
        name: 'PatientList',
        component: () => import('../views/Patients/PatientListView.vue')
      },
      {
        path: '/PatientDetailsForm',
        name: 'PatientDetailsForm',
        component: () => import('../views/Patients/PatientDetailsForm.vue'),
        children:[
          {
            path: '/PatientDetails',
            name: 'PatientDetails',
            component: () => import('../views/Patients/PatientDetailsView.vue')
          },
          {
            path: '/PatientGallery',
            name: 'PatientGallery',
            component: () => import('../views/Patients/PatientGalleryView.vue')
          },
          {
            path: '/PatientScanFiles',
            name: 'PatientScanFiles',
            component: () => import('../views/Patients/PatientScanFilesView.vue')
          },
          {
            path: '/PatientCaseDetails',
            name: 'PatientCaseDetails',
            component: () => import('../views/Patients/PatientCaseDetailsView.vue')
          },
          {
            path: '/PatientTreatmentPlan',
            name: 'PatientTreatmentPlan',
            component: () => import('../views/Patients/PatientTreatmentPlanView.vue')
          },
          {
            path: '/PatientTreatmentTracker',
            name: 'PatientTreatmentTracker',
            component: () => import('../views/Patients/PatientTreatmentTrackerView.vue')
          },
          {
            path: '/PatientAppointment',
            name: 'PatientAppointment',
            component: () => import('../views/Patients/PatientAppointmentView.vue')
          },
          
        ]
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
