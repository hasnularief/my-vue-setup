<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarSupportedContent"
      class="collapse navbar-collapse"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown active">
          <a
            id="navbarDropdown"
            class="nav-link dropdown-toggle navbar-brand"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            MENU
          </a>
          <div
            class="dropdown-menu"
            aria-labelledby="navbarDropdown"
          >
            <a
              class="dropdown-item"
              href="#/"
            >
              <i class="fas fa-home" /> Home
            </a>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        >
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
    export default {
        mounted() {
           
        }
    }
</script>
