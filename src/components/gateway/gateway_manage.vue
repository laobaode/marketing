<template>
    <div class="container">
         <el-checkbox-group v-model="checkList">
            <el-checkbox label="金融"></el-checkbox>
            <el-checkbox label="电商"></el-checkbox>
            <el-checkbox label="区块链"></el-checkbox>
            <el-checkbox label="游戏"></el-checkbox>
            <el-checkbox label="房产"></el-checkbox>
             <el-button type="primary" style="margin-left:20px">发送</el-button>
        </el-checkbox-group>
        <div style="height:20px; margin-top:20px; margin-bottom:10px;font-size:16px; color:#909399">发送记录</div>
             <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                prop="messageId"
                label="消息ID"
                width="150">
                </el-table-column>
                 <el-table-column
                prop="content"
                label="内容"
                width="480">
                </el-table-column>
                <el-table-column
                prop="accountName"
                label="账号"
                width="100">
                </el-table-column>
                <el-table-column
                prop="countryNo"
                label="国家码"  width="80">
                </el-table-column>
                <el-table-column
                prop="mobilePhone"
                label="手机号">
                </el-table-column>
                <el-table-column
                prop="requestTime"
                label="请求时间">
                </el-table-column>
                <el-table-column
                prop="receiveReportTime"
                label="状态报告收到时间">
                </el-table-column>
                <el-table-column
                prop="status"
                label="状态" width="100">
                </el-table-column>
                <el-table-column
                prop="gatewayId"
                label="网关ID">
                </el-table-column>
                <el-table-column
                prop="gatewayName"
                label="网关名称">
                </el-table-column>
            </el-table>
               <el-pagination background layout="total,sizes,prev, pager, next,jumper" :current-page="pageInfo.pageNo" :page-size="pageInfo.size" :total="pageInfo.pageTotal" :page-sizes="[10, 20, 50]" @size-change="handleSizeChange" @current-change="handleCurrentChange">
        </el-pagination>

    </div>
 
</template>

<script>
  import format from '@/utils/DateUtils'
  export default {
    data () {
      return {
           pageInfo: {
                pageNo: 1,
                size: 10,
                pageTotal: 100
            },
        checkList: ['选中且禁用','复选框 A'],
         tableData: [{
          date: '2016-05-02',
          messageId: '王小虎',
          accountName: 'I123456',
          countryNo: '86',
          mobilePhone: '8618516038406',
          requestTime: '02-13 00:12:23',
          receiveReportTime: '02-13 00:12:23',
          status: 'DELIVED',
          gatewayId: '1',
          gatewayName: '印尼通道',
          messageContent: '您好!您的验证码是2538',
        }],
        dataArray: [
                    {"mobilePhone":"8619820632378","content":"【BitCV】您的验证码是：7202，有效期为5分钟，请不要把验证码泄露给其他人。"},
                    {"mobilePhone":"8618633061365","content":"【测试商户】您的eos开通账户余额不足，请尽快充值，否则会影响用户开通eos账户结果"},
                    {"mobilePhone":"6285966610217","content":"Kode verifikasi Anda adalah 9248. Mohon perhatian,  jangan beri tahu siapa pun tentang ini."},
                    {"mobilePhone":"6285889569639","content":"Kode verifikasi Anda adalah 8247. Mohon perhatian,  jangan beri tahu siapa pun tentang ini."},
                    {"mobilePhone":"6287751156699","content":"Kode verifikasi Anda adalah 3729. Mohon perhatian,  jangan beri tahu siapa pun tentang ini."},
                    {"mobilePhone":"6285714813013","content":"Kode verifikasi Anda adalah 2529. Mohon perhatian,  jangan beri tahu siapa pun tentang ini."},
                    {"mobilePhone":"8615624970345","content":"【hicoin】您的eos开通账户余额不足，请尽快充值，否则会影响用户开通eos账户结果"},
                    {"mobilePhone":"34665859573	","content":"   【租租车】您的西班牙租车订单31105792我们正在积极联系租车公司确认中，请您耐心等待，感谢您对我们的支持！"},
                    {"mobilePhone":"6282213701979","content":"Kode verifikasi Anda adalah 3827. Mohon perhatian,  jangan beri tahu siapa pun tentang ini."},
                    {"mobilePhone":"6282297741639","content":"Kode verifikasi Anda adalah 8027. Mohon perhatian,  jangan beri tahu siapa pun tentang ini."}]
                   
      };
    },
      mounted(){ 
          var dataArray = this.dataArray;
            for (var i = 0; i < 10; i++){
                dataArray[i]["messageId"] = "201708693215"+i;
                dataArray[i]["countryNo"] = 62;
                dataArray[i]["accountName"] = "I789019"+i;
                dataArray[i]["requestTime"] = format(new Date(), 'MM-dd HH:mm:ss');
                dataArray[i]["receiveReportTime"] = format(new Date(), 'MM-dd HH:mm:ss');
                dataArray[i]["status"] = "成功";
                dataArray[i]["gatewayId"] = "62";
                dataArray[i]["gatewayName"] = "中国";
            }
                this.tableData = dataArray;
     },
  };
</script>