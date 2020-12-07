<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sum-6">
                <form action="">
                    <div class="form-group row border-bottom">
                        <lavel for="id" class="col-sm-3 col-form-label">ID</lavel>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="id" v-vind:value="taskId">
                    </div>
                    <div class="form-group row border-bottom">
                        <lavel for="title" class="col-sm-3 col-form-label">Title</lavel>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="Title" value="title title">
                    </div>
                    <div class="form-group row border-bottom">
                        <lavel for="content" class="col-sm-3 col-form-label">Content</lavel>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="content" value="content content">
                    </div>
                    <div class="form-group row border-bottom">
                        <lavel for="person-in-charge" class="col-sm-3 col-form-label">Person in charge</lavel>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="person-in-charge" value="Ichiro">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            taskId: String
        }
    }
</script>
