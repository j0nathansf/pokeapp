<script>
    export let width = "100%"
    export let height = "20px"
</script>

<style>
    .skeleton {
        background-color: #e0e0e0;
        animation: loading 1s infinite ease-in-out;
    }
    @keyframes loading {
        0% { opacity: 0.7; }
        50% { opacity: 0.9; }
        100% { opacity: 0.7; }
    }
</style>

<div class="skeleton rounded-4" style={`width: ${width}; height: ${height};`}>
</div>