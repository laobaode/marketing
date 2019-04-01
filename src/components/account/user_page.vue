<template>
    <div class="container">        
        <!-- 查询区----start -->
        <el-form :label-position="labelPosition" :label-width="labelWidth" :inline="true" :model="formSearch" class="demo-form-inline">
            <el-form-item label="标签：">
                <div class="tags">
                    <el-radio v-model="radio" label="1">金融</el-radio>
                    <el-radio v-model="radio" label="2">电商</el-radio>
                    <el-radio v-model="radio" label="3">区块链</el-radio>
                    <el-radio v-model="radio" label="4">游戏</el-radio>
                    <el-radio v-model="radio" label="5">地产</el-radio>
              </div>
            </el-form-item>
            <el-form-item label=" ">
                <el-button type="primary" @click="choseSubTags(1)">子标签</el-button>
            </el-form-item>
            <el-form-item label=" ">
                <el-button type="primary" @click="onQuery" class="el-button">查询</el-button>
            </el-form-item>
        </el-form>
          <el-row class="mgb15">
             <button type="button" class="el-button el-button--primary"><!----><!----><span>批量发送</span></button>
        </el-row>
        <!-- 表格---start -->
        <el-table :data="tableData" border stripe style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="userId" label="用户ID" width="180" sortable>
            </el-table-column>
            <el-table-column prop="cellPhone" label="手机号码" width="180" sortable>
            </el-table-column>
            <el-table-column prop="enable"  label="活跃程度">
            </el-table-column>
        
            <el-table-column label="操作" fixed="right" min-width="180">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" @click="openApiManage(scope.$index, scope.row)">发送短信</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="total,sizes,prev, pager, next,jumper" :current-page="pageInfo.pageNo" :page-size="pageInfo.size" :total="pageInfo.pageTotal" :page-sizes="[10, 20, 50]" @size-change="handleSizeChange" @current-change="handleCurrentChange">
        </el-pagination>
        <!-- 表格---end -->

        <!-- 子标签弹框---start -->
        <el-dialog title="子标签" :visible.sync="subTagVisible" width="800px">
             <el-tree
                :data="data2"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps">
            </el-tree>
             <el-button type="success" style="margin:20px" @click="subTagVisible = false">确定</el-button>
        </el-dialog>
    </div>
</template>

<style lang="scss">
    .mgb15{
        margin-top:20px
    }
</style>

<script>
import apis from '../../apis/apis';
import baseAxios from '../../apis/BaseAxios';
import url from '../../apis/constant';
import phone_factory from '../../apis/cellphone_constant';

export default {
    name: 'tablepage',
    data() {
        return {
         radio: '1',
         data2: [{
          id: 1,
          label: '支付频度',
          children: [{
            id: 4,
            label: '高频用户',
            children: [{
              id: 9,
              label: '过去12个月、累计次数大于120'
            },]
          },
          {
            id: 4,
            label: '中频用户',
            children: [{
              id: 9,
              label: '过去12个月、累计次数20-120'
            },]
          },
          {
            id: 4,
            label: '低频用户',
            children: [{
              id: 9,
              label: '过去12个月、累计次数小于20'
            },]
          }]
        }, {
          id: 2,
          label: '消费订单比例',
          children: [{
            id: 5,
            label: '消费狂人'
          }, {
            id: 6,
            label: '消费达人'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
            pageInfo: {
                pageNo: 1,
                size: 10,
                pageTotal: 1000
            },
            tableData: [],
            apiTableData: [],
            formSearch: {   //表单对象
                pageNo: 1,
                size: 10,
                enable: 0,
                userType:0
         
            },
            labelPosition: 'right', //lable对齐方式
            labelWidth: '80px',  //lable宽度
            subTagVisible: false,
            formLabelWidth: '120px',
            formAdd: {
                
            },
            formEdit: {
                
            },
            multipleSelection: [],
            rules: {
                 itemId: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
            }
        };
        
    },
     mounted(){ 

         var j_r = phone_factory.j_r;
         var pageNo = this.pageInfo.pageNo;
         var tableData_ = [];
         for (var i = 0; i < pageNo * 10; i++){
             tableData_[i] = j_r[i];
             tableData_[i]["userId"] = i + 1;
             tableData_[i]["enable"] = (i % 2==0 ? "非常活跃":"一般活跃");
         }
         this.tableData = tableData_;
        
        },
    methods: {
       
        choseSubTags(id){
            this.subTagVisible = true;
        },
        handleCurrentChange(val) {
            this.pageInfo.pageNo = val;
            var j_r = phone_factory.j_r;
            var pageNo = this.pageInfo.pageNo;
            var tableData_ = [];
            var index = 0;
            for (var i = (pageNo -1) *10 ; i < pageNo * 10; i++){
                tableData_[index] = j_r[i];
                tableData_[index]["userId"] = i + 1;
                tableData_[index]["enable"] = (i % 2==0 ? "非常活跃":"一般活跃");
                index++;
            }
            this.tableData = tableData_;
            
        },
        handleSizeChange(){

        }
       
    }
};
</script>
