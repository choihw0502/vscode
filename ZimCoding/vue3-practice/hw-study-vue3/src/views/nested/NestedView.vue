<template>
  <div>
    <ul class="nav">
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          active-class="active"
          :to="{ name: 'NestedOne', replace: false }"
        >
          Nested One
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          active-class="active"
          :to="{ name: 'NestedTwo', replace: true }"
        >
          Nested Two
        </RouterLink>
      </li>
    </ul>
  </div>
  <hr class="my-4" />
  <RouterView></RouterView>
</template>

<script setup></script>

<style lang="scss" scoped></style>
