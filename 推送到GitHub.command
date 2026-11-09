#!/bin/bash
cd "$(dirname "$0")"
echo "====================================================="
echo "  正在推送至 https://github.com/Manifo1d/iGEMQA.git"
echo "====================================================="
git push -u origin main
echo ""
read -p "按回车键关闭窗口..."
