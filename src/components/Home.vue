<template lang="pug">
#home
  app-about-me
  app-certificates
  app-courses
  app-services
  app-conservation
  app-contact
</template>

<script>
// Local Components Import
import AppAboutMe from './AboutMe/AboutMe'
import AppCertificates from './Certificates/Certificates'
import AppCourses from './Courses/Courses'
import AppServices from './Services/Services'
import AppConservation from './Conservation/Conservation'
import AppContact from './Contact/Contact'

export default {
  name: 'Home',
  components: {
    'app-about-me': AppAboutMe,
    'app-certificates': AppCertificates,
    'app-courses': AppCourses,
    'app-services': AppServices,
    'app-conservation': AppConservation,
    'app-contact': AppContact
  }
}
</script>

<style scoped></style>
