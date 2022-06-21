<template>
  <div class="bg-dark mt-8">
    <div class="container">
      <div
        class="d-flex flex-column align-items-center justify-content-between text-white py-4"
      >
        <div class="user-content d-flex align-items-center mb-0">
          <p class="border-end pe-2 me-2">© 耆望.2022 COPYRIGHT</p>
          <p>
            <router-link to="/admin/products" class="text-white"
              ><i class="bi bi-person-circle"></i
            ></router-link>
          </p>
        </div>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a
              href="https://github.com/DavidWang85/vue-hope"
              class="text-white mx-2"
              target="_blank"
              ><i class="bi bi-github"></i
            ></a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              class="text-white mx-2"
              target="_blank"
              ><i class="bi bi-facebook"></i
            ></a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              class="text-white mx-2"
              target="_blank"
              ><i class="bi bi-twitter"></i
            ></a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              class="text-white ms-2"
              target="_blank"
              ><i class="bi bi-instagram"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
