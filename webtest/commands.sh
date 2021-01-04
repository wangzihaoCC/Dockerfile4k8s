#!/bin/bash
uwsgi --ini /webtest/uwsgi.ini
sleep 5
python /webtest/loginTest/initDB.py || exit 1
tail -f /webtest/uwsgi.log
 
