<template>
    <div class="fillcontain">
        <head-top></head-top>

        <div class="table_container">
            <el-table :data="tableData" highlight-current-row style="width: 100%">
                <el-table-column property="user_name" label="用户名" width="180"></el-table-column>
                <el-table-column property="create_time" label="注册日期" width="220"></el-table-column>
                <el-table-column property="city" label="地址" width="180"></el-table-column>
                <el-table-column property="authority" label="权限"></el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="20"
                    layout="total, prev, pager, next"
                    :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {adminList, adminCount} from '@/api/getData'
    import {dateFormat} from '@/utils/DateUtils'

    export default {
        name: "adminList",
        components: {
            headTop
        },
        data() {
            return {
                tableData: [],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
            }
        },
        created() {
            this.initData();
        },
        methods: {
            async initData() {
                try {
                    const countData = await adminCount();
                    if (countData.status == 10000) {
                        this.count = countData.map.count;
                    } else {
                        console.log('获取数据失败');
                    }
                    this.getAdminList();
                } catch (err) {
                    console.log('获取数据失败', err);
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = val - 1;
                this.getAdminList()
            },
            async getAdminList() {
                try {
                    const res = await adminList({offset: this.offset, limit: this.limit});
                    this.tableData = [];
                    res.forEach(item => {
                        const tableItem = {
                            create_time: dateFormat(item.createTime),
                            user_name: item.username,
                            authority: this.authority(item.authority),
                            city: item.city,
                        };
                        this.tableData.push(tableItem)
                    });
                } catch (err) {
                    console.log('获取数据失败', err)
                }
            },
            authority(res) {
                if (res == 0) {
                    return '管理员';
                } else if (res == 1) {
                    return '超级管理员';
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../style/mixin';

    .table_container {
        padding: 20px;
    }
</style>
