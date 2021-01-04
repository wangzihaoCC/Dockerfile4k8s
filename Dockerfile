FROM hywangzihao/imagesfork8s

LABEL author="wzh" email="wangzihao@huayun.com" purpose="nginx+uwsgi+flask+python3"

COPY ./webtest/ /webtest/

RUN pip install --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple \
    && pip install flask -i https://pypi.tuna.tsinghua.edu.cn/simple
