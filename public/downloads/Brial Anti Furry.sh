 #!/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ -f "$DIR/symbol.png" ]; then
    SYMBOL_ICON="$DIR/symbol.png"
else
    SYMBOL_ICON="$DIR/logo.png"
fi

FULL_LOGO="$DIR/logo.png"

notify-send -a "⚠️ Brial Science Security" \
            -u normal \
            -i "$SYMBOL_ICON" \
            -t 10000 \
            --hint=string:image-path:"$FULL_LOGO" \
            "Brial 科技公司提示" \
            "在您的电脑中检测到大量未经验证的福瑞美片。监管已启动，将持续 72 小时。在此期间请勿进行任何敏感操作，系统将实时上报异常信息。此通知将在 10 秒后关闭。详情请查看下方 Brial Science 安全架构指南。"

# 播放严重错误提示音
canberra-gtk-play -i dialog-error
